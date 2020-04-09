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
                <Text style={styles.headerDescription}>Aqui você poderá se cadastrar no nosso banco de necessitados. Seu pedido aparecerá no feed de Ajuda.</Text>
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
                        placeholder="Seu telefone"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Cidade</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Sua cidade"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Endereço</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Seu endereço"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Número</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Número da casa"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Ponto de referência</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Um ponto de referência"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputAreaGroup}>
                    <Text style={styles.inputLabel}>Descrição</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        placeholder="Descreva sua história e o que está precisando"
                        placeholderTextColor="#c5c5c5"
                        multiline={true}
                        numberOfLines={8} />
                </View>
                <TouchableOpacity style={styles.buttonForm}>
                    <Text style={styles.buttonFormText}>Pedir Ajuda</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}