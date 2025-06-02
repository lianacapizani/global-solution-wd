import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import HeaderPage from '../../src/components/molecules/HeaderPage';

export default function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="construct-sharp" size={36} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>Página em construção</Text>
        </View>
    </SafeAreaView>

    );
}

