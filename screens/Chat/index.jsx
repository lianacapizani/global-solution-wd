import Text from '../../src/components/atoms/Text';


export default function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
        <HeaderPage titulo="Chat" destino="Home" />
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="construct-sharp" size={36} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>Página em construção</Text>
        </View>
    </SafeAreaView>

    );
}

