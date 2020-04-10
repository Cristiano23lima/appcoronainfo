import { StyleSheet } from 'react-native';
import constants from 'expo-constants';

import { background, color } from '../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background,
        flexDirection: 'column',
        paddingVertical: 20,

    },
    buttonVoltar: {
        flexDirection: "row",
        width: 50,
        height: 19,
        marginLeft: 20,
        marginTop: 15,
        marginBottom: constants.statusBarHeight + 12,
    },
    buttonVoltarText: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 19,
        fontWeight: 'bold',
    },
    header: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerTitle: {
        marginVertical: 20,
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center"
    },
    headerDescricao: {
        fontSize: 16,
        textAlign: 'center',
        color: '#999999'
    },
    textFocus: {
        color: '#7e1bf0'
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: 300,
        height: 430,
        backgroundColor: '#38383d',
        marginVertical: 30,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10
    },
    imageParceiro: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginVertical: 15,
    },
    textNomeParceiro: {
        fontSize: 26,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    textAreaParceiro: {
        fontSize: 20,
        color: '#999999',
        fontWeight: 'bold',
    },
    textDescricaoParceiro: {
        fontSize: 13,
        textAlign: 'center',
        color: '#7e1bf0',
        marginVertical: 10,
        fontStyle: 'italic',
    },
    redeSocial: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10
    },
    redeSocialIcon: {
        fontSize: 20,
        color: "#999999",
        marginHorizontal: 5
    }
})