import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';

import coronaImg from '../../assets/corona.png';
import styles from './styles';

export default function Inicial() {

    const navigation = useNavigation();

    function navigate(screenName) {
        navigation.navigate(screenName);
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                {/* <Image source={coronaImg} /> */}
                <Text style={styles.headerText}>LOGO</Text>
            </View>

            <View style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={() => { navigate('PedirAjuda'); }}>
                    <Text style={styles.buttonText}>Pedir Ajuda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigate('Indicar'); }}>
                    <Text style={styles.buttonText}>Indicar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigate('Feed'); }}>
                    <Text style={styles.buttonText}>Feed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigate('Ajudar'); }}>
                    <Text style={styles.buttonText}>Ajudar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigate('Estatisticas'); }}>
                    <Text style={styles.buttonText}>Estatísticas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigate('Parceiros'); }}>
                    <Text style={styles.buttonText}>Parceiros</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}