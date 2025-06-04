import React from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import Text from '../../src/components/atoms/Text';
import SectionTitle from '../../src/components/atoms/SectionTitle';
import CircleButton from '../../src/components/atoms/CircleButton';
import EmergencySection from '../../src/components/organisms/EmergencySection';
import NewsItem from '../../src/components/molecules/NewsItem';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../src/components/molecules/Header';

export default function Home() {
      const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView style={styles.container}>
        <Header />
        <SectionTitle title="Guia rápido" />
        <Text style={styles.paragraph}>
            Saiba como agir em diferentes tipos de emergência e esteja pronto para proteger você e quem está ao seu redor.
        </Text>
        <View style={styles.circleRow}>
            <CircleButton
            image={require('../../assets/images/kits-emergencia.jpg')}
            label="Kit Emergência"
            color="#E94600"
            onPress={() => navigation.navigate('EmergencyKits')}
            />
            <CircleButton
            image={require('../../assets/images/como-agir.png')}
            label="Como agir"
            color="#2A7DC2"
            onPress={() => navigation.navigate('Guideliness')}
            />
            <CircleButton
            image={require('../../assets/images/primeiros-socorros.jpg')}
            label="Primeiros Socorros"
            color="#27AE60"
            onPress={() => navigation.navigate('PrimeirosSocorros')}
            />
            <CircleButton
            image={require('../../assets/images/utilitarios.png')}
            label="Utilitários"
            color="#2A7DC2"
            onPress={() => navigation.navigate('Informacoes')}
            />
        </View>
        <View style={styles.emergencySection}>
            <SectionTitle title="Ligação de emergência" />
            <EmergencySection />
        </View>

        <SectionTitle title="Últimas notícias" />
        <NewsItem
            image={require('../../assets/images/chuvas.jpg')}
            headline="Alerta de enchente para região sul da cidade"
            description="Defesa Civil recomenda evitar áreas ribeirinhas nas próximas 24h devido ao risco de transbordamento."
            time="23 min"
        />
        <NewsItem
            image={require('../../assets/images/noticia-queimadas.jpg')}
            headline="Queimada atinge área próxima ao Parque Municipal"
            description="Moradores relataram fumaça intensa e dificuldade para respirar. Bombeiros já atuam no local."
            time="23 min"
        />
        </ScrollView>
    </SafeAreaView>
  );
}
