import React from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';

import donaForm from '../../assets/donaform.jpeg';
import rgym from '../../assets/rgym.jpeg';
import yello from '../../assets/yello.jpeg';

export default function Parceiros() {

    const navigation = useNavigation();

    //botão voltar para a tela anterior
    function navigateBack() {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.buttonVoltar} onPress={navigateBack}>
                <Feather name="chevron-left" size={16} color="#fff" />
                <Text style={styles.buttonVoltarText}> Voltar</Text>
            </TouchableOpacity>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Conheça os parceiros que estão fazendo o projeto acontecer</Text>
                <Text style={styles.headerDescricao}>Empresas <Text style={styles.textFocus}>empenhadas</Text> em <Text style={styles.textFocus}>compartilhar o bem </Text> </Text>
            </View>

            <View style={styles.body}>
                <View style={styles.card}>
                    <Image source={donaForm} style={styles.imageParceiro} />
                    <Text style={styles.textNomeParceiro}>Dona Formiga</Text>
                    <Text style={styles.textAreaParceiro}>Ateliê Gourmet</Text>
                    <Text style={styles.textDescricaoParceiro}>Recebendo alimentos no lugar do dinheiro em suas entregas de Delivery para ajudar pessoas necessitadas, além de fazer uma doação para nosso projeto</Text>
                    <View style={styles.redeSocial}>
                        <TouchableOpacity>
                            <FontAwesome name="facebook-square" style={styles.redeSocialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="whatsapp" style={styles.redeSocialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="instagram" style={styles.redeSocialIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image source={rgym} style={styles.imageParceiro} />
                    <Text style={styles.textNomeParceiro}>RGym</Text>
                    <Text style={styles.textAreaParceiro}>Academia</Text>
                    <Text style={styles.textDescricaoParceiro}>Fornecendo descontos nas mensalidades para quem doar alimentos para pessoas necessitadas</Text>
                    <View style={styles.redeSocial}>
                        <TouchableOpacity>
                            <FontAwesome name="facebook-square" style={styles.redeSocialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="whatsapp" style={styles.redeSocialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="instagram" style={styles.redeSocialIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image source={yello} style={styles.imageParceiro} />
                    <Text style={styles.textNomeParceiro}>Yeloo</Text>
                    <Text style={styles.textAreaParceiro}>Mídias Sociais</Text>
                    <Text style={styles.textDescricaoParceiro}>Arrecadando alimentos para doação, e criando gratuitamente as artes para o projeto</Text>
                    <View style={styles.redeSocial}>
                        <TouchableOpacity>
                            <FontAwesome name="facebook-square" style={styles.redeSocialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="whatsapp" style={styles.redeSocialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="instagram" style={styles.redeSocialIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}