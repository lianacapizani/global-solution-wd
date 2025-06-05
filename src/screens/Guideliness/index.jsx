import React, { useState } from "react";
import { View, ImageBackground, SafeAreaView, Pressable } from "react-native";
import Text from "../../components/atoms/Text";
import HeaderPage from "../../components/molecules/HeaderPage";
import Earthquakes from './Earthquakes';
import Fire from './Fire';
import Floods from './Floods';
import styles from "./style";

export default function Guideliness() {

  const tabs = ['Enchentes', 'Incêndios', 'Terremotos'];
  const [selectedTab, setSelectedTab] = useState("Enchentes");

  const renderContent = () => {
    switch (selectedTab) {
      case 'Terremotos':
        return <Earthquakes />;
      case 'Incêndios':
        return <Fire />;
      case 'Enchentes':
        return <Floods />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require("../../../assets/images/como-agir.png")}
          style={styles.backgroundContainer}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.innerContainer}>
            <HeaderPage destino="Inicio" titulo="Início" color="#fff" />
            <Text style={styles.title}>Como agir</Text>
            <Text style={styles.subtitle}>
              Como agir em situações emergênciais
            </Text>
          </View>
        </ImageBackground>
      </View>
        <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <Pressable
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ] }
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.contentContainer}>
        {renderContent()}
      </View>


    


    </SafeAreaView>
  );
}
