import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';


import styles from './styles';

export default function PedirAjuda() {
    const navigation = useNavigation();

    //botão voltar para a tela anterior
    function navigateBack() {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.buttonVoltar} onPress={navigateBack}>
                <Feather name="chevron-left" size={16} color="#fff" />
                <Text style={styles.buttonVoltarText}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Pedir Ajuda</Text>
                <Text style={styles.headerDescription}>Agradeçoes muito seu interesse em ajudar ! Precisaremos apenas de alguns dados para entrar em contato com você, ou que clique no link do Whatsapp para se comunicar diretamente com um de nossos representantes.</Text>
                <View style={styles.retangulo}></View>
            </View>

            <View style={styles.body}>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Nome</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Seu nome"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Telefone</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Seu telefone com DDD"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Email(opcional)</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Seu email"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <TouchableOpacity style={styles.buttonForm}>
                    <Feather name="heart" size={16} color="#fff" />
                    <Text style={styles.buttonFormText}>Desejo Ajudar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}