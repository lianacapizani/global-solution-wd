import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Text from "../../src/components/atoms/Text";
import HeaderPage from "../../src/components/molecules/HeaderPage";
import styles from "./style";

const kitBasico = [
  { name: "Lanternas e pilhas extras", icon: "flashlight" },
  { name: "Rádio portátil", icon: "radio" },
  { name: "Água potável (4L por pessoa por dia)", icon: "water" },
  { name: "Alimentos não perecíveis", icon: "fast-food" },
  { name: "Cobertores térmicos", icon: "bed" },
  { name: "Cópias de documentos importantes", icon: "document-text" },
];

const kitPrimeirosSocorros = [
  { name: "Curativos e bandagens", icon: "medkit" },
  { name: "Antisséptico", icon: "flask" },
  { name: "Tesoura", icon: "cut" },
  { name: "Luvas descartáveis", icon: "hand-left" },
  { name: "Medicamentos essenciais", icon: "medical" },
];

export default function EmergencyKits() {
  const [selectedTab, setSelectedTab] = useState("basico");
  const [checkedItems, setCheckedItems] = useState({});

  const data = selectedTab === "basico" ? kitBasico : kitPrimeirosSocorros;

    const toggleItem = (itemName) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require("../../assets/images/kits-emergencia.jpg")}
          style={styles.backgroundContainer}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.innerContainer}>
            <HeaderPage destino="Inicio" titulo="Início" color="#fff" />
            <Text style={styles.title}>Kit de emergência</Text>
            <Text style={styles.subtitle}>
              Itens recomendados para situações emergenciais
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "basico" && styles.activeTab]}
          onPress={() => setSelectedTab("basico")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "basico" && styles.activeTabText,
            ]}
          >
            Básico
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "primeiros" && styles.activeTab]}
          onPress={() => setSelectedTab("primeiros")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "primeiros" && styles.activeTabText,
            ]}
          >
            Primeiros socorros
          </Text>
        </TouchableOpacity>
      </View>

 <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <View style={styles.iconCircle}>
              <Ionicons name={item.icon} size={20} color="#fff" />
            </View>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity onPress={() => toggleItem(item.name)}>
              <Ionicons
                name={checkedItems[item.name] ? "checkbox" : "square-outline"}
                size={24}
                color="#346a8a"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
