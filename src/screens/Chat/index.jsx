import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, FlatList, SafeAreaView } from 'react-native';
import { collection, getDocs, deleteDoc, doc, addDoc, query, orderBy } from 'firebase/firestore';
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

    try {
      await addDoc(collection(db, 'chatMessages'), {
        text: input,
        fromUser: true,
        timestamp: new Date()
      });
      setInput('');
      fetchMessages();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  const handleQuickReply = async (text) => {
    try {
      await addDoc(collection(db, 'chatMessages'), {
        text,
        fromUser: true,
        timestamp: new Date()
      });
      fetchMessages();
    } catch (error) {
      console.error('Erro ao enviar mensagem rápida:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

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

    {/* Botão para limpar o chat */}
    <TouchableOpacity onPress={clearChat} style={styles.clearButton}>
      <Text style={styles.clearButtonText}>Limpar Chat</Text>
    </TouchableOpacity>

    {/* Quick Replies */}
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
      data={messages}
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

)};