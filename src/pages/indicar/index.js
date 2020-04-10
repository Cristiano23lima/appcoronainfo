import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';


import styles from './styles';

export default function Indicar() {
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
                <Text style={styles.headerTitle}>Conheço alguem que precisa</Text>
                <Text style={styles.headerDescription}>Nesta seção você poderá nos informar sobre alguem que está precisando de ajuda, mas que não tem acesso a internet ou não consegue acessar nossa página por algum motivo. Esse é um espaço de ajuda ao próximo.</Text>
                <View style={styles.retangulo}></View>
            </View>


            <View style={styles.body}>
                {/* Dados do ajudante */}
                <Text style={styles.titleData}>Seus Dados</Text>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Nome (Opcional)</Text>
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
                        placeholderTextColor="#c5c5c5"
                        keyboardType="numeric" />
                </View>

                {/* dados do necessitado */}
                <Text style={styles.titleData}>Dados de quem está precisando</Text>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Nome</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nome da pessoa"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Telefone (Opcional)</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Telefone da pessoa"
                        placeholderTextColor="#c5c5c5"
                        keyboardType="numeric" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Cidade</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Cidade onde ela reside"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Endereço</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Endereço da pessoa"
                        placeholderTextColor="#c5c5c5" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Número</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Número da casa"
                        placeholderTextColor="#c5c5c5"
                        keyboardType="numeric" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Ponto de referência</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Um ponto de referência"
                        placeholderTextColor="#c5c5c5"
                    />
                </View>
                <View style={styles.inputAreaGroup}>
                    <Text style={styles.inputLabel}>Descrição</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        placeholder="Descreva sobre a história dessa pessoa e o que ela está precisando..."
                        placeholderTextColor="#c5c5c5"
                        multiline={true}
                        numberOfLines={8} />
                </View>
                <TouchableOpacity style={styles.buttonForm}>
                    <Feather name="heart" size={16} color="#fff" />
                    <Text style={styles.buttonFormText}>Indicar para Ajuda</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}