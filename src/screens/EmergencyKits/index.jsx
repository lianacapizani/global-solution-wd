import React, { useState } from "react";
import { View, FlatList, ImageBackground, SafeAreaView } from "react-native";
import Text from "../../components/atoms/Text";
import HeaderPage from "../../components/molecules/HeaderPage";
import KitItem from "../../components/molecules/KitItem";
import TabSelector from "../../components/organisms/TabSelector";
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
    setCheckedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require("../../../assets/images/kits-emergencia.jpg")}
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

      <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <KitItem
            item={item}
            isChecked={checkedItems[item.name]}
            toggleItem={toggleItem}
          />
        )}
      />
    </SafeAreaView>
  );
}
