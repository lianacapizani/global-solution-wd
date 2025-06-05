import React, { useEffect, useState } from 'react';
import {
  View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, FlatList, SafeAreaView
} from 'react-native';
import {
  collection, getDocs, deleteDoc, doc, addDoc, query, orderBy
} from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import HeaderPage from '../../components/molecules/HeaderPage';
import MessageBubble from '../../components/atoms/MessageBubble';
import Text from '../../components/atoms/Text';
import styles from './style';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const quickReplies = [
    "Minha rua está alagada. O que devo fazer?",
    "Como evitar a fumaça dos incêndios?",
    "O que devo levar no kit de emergência?",
    "Estou sem luz e sem internet. E agora?"
  ];

  const quickRepliesData = {
    "Minha rua está alagada. O que devo fazer?":
      "Fique em casa, desligue os aparelhos elétricos e evite contato com a água. Se for necessário sair, busque abrigo em locais altos e seguros.",
    "Como evitar a fumaça dos incêndios?":
      "Feche portas e janelas, use pano úmido para vedar frestas e, se possível, utilize máscara. Evite sair até a fumaça dissipar.",
    "O que devo levar no kit de emergência?":
      "Água potável, alimentos não perecíveis, lanternas, pilhas, documentos, remédios, roupas extras e carregador portátil.",
    "Estou sem luz e sem internet. E agora?":
      "Use lanternas, evite abrir a geladeira, mantenha celulares carregados com power bank e acompanhe informações pelo rádio."
  };

  const fetchMessages = async () => {
    try {
      const q = query(collection(db, 'chatMessages'), orderBy('timestamp'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(data);
    } catch (error) {
      console.error('Erro ao buscar mensagens:', error);
    }
  };

  const clearChat = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'chatMessages'));
      const deletePromises = querySnapshot.docs.map(docSnap =>
        deleteDoc(doc(db, 'chatMessages', docSnap.id))
      );
      await Promise.all(deletePromises);
      setMessages([]);
    } catch (error) {
      console.error('Erro ao limpar o chat:', error);
    }
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = {
      id: `${Date.now()}-user`,
      text: input,
      fromUser: true,
      timestamp: new Date()
    };

    try {
      await addDoc(collection(db, 'chatMessages'), newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  const handleQuickReply = async (text) => {
    const newUserMessage = {
      id: `${Date.now()}-user`,
      text,
      fromUser: true,
      timestamp: new Date()
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    await addDoc(collection(db, 'chatMessages'), newUserMessage);

    const responseText = quickRepliesData[text]
      ? quickRepliesData[text]
      : "Desculpe, não encontrei uma resposta para isso.";

    const autoReply = {
      id: `${Date.now()}-bot`,
      text: responseText,
      fromUser: false,
      timestamp: new Date()
    };

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, autoReply]);
      addDoc(collection(db, 'chatMessages'), autoReply);
    }, 500);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const welcomeMessage = {
    id: 'welcome-message',
    text: 'Olá! Sou o assistente da Laerta. Me diga como posso ajudar.',
    fromUser: false,
    timestamp: new Date(0)
  };

  const allMessages = [welcomeMessage, ...messages].sort((a, b) =>
    new Date(a.timestamp) - new Date(b.timestamp)
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F4F4' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <View style={styles.topBar}>
          <HeaderPage titulo="Inicio" color="#000" />
        </View>

        <TouchableOpacity onPress={clearChat} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Limpar Chat</Text>
        </TouchableOpacity>

        <View style={styles.quickRepliesContainer}>
          {quickReplies.map((reply, index) => (
            <TouchableOpacity
              key={index}
              style={styles.replyButton}
              onPress={() => handleQuickReply(reply)}
            >
              <Text style={styles.replyButtonText}>{reply}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={allMessages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MessageBubble message={item} />}
          contentContainerStyle={styles.messagesContainer}
          inverted={false}
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Digite sua mensagem"
            style={styles.input}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
