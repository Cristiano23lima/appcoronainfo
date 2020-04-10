import { StyleSheet } from 'react-native';
import constants from 'expo-constants';

import { background, color } from '../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background,
        flexDirection: 'column',
        paddingVertical: 20
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
        marginBottom: 50,
    },
    headerTitle: {
        fontSize: 36,
        color: color,
        textAlign: 'center',
        lineHeight: 49,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    headerDescription: {
        textAlign: 'center',
        color: '#999999',
        fontSize: 14,
        lineHeight: 19,
        fontWeight: 'bold'
    },
    retangulo: {
        backgroundColor: '#7D40E7',
        height: 6,
        width: 150,
        marginTop: 16
    },
    body: {
        justifyContent: "center",
        backgroundColor: '#1A1A1D',
        borderRadius: 5,
        width: 352,
        height: 1050,
        marginBottom: 50,
        marginHorizontal: 4
    },
    titleData: {
        color: "#7D40E7",
        left: 8,
        fontWeight: 'bold',
        fontSize: 26
    },
    inputGroup: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        width: 335,
        left: 8,
    },
    inputAreaGroup: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        width: 335,
        left: 8,
        marginTop: 17
    },
    inputText: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 15,
        color: "#fff",
    },
    inputTextArea: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        height: 100,
        paddingHorizontal: 15,
        paddingVertical: 8,
        color: "#fff",
        textAlignVertical: "top",
        textAlign: "justify",
    },
    inputLabel: {
        color: color,
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
    },
    buttonForm: {
        borderRadius: 5,
        backgroundColor: '#7D40E7',
        width: 334,
        height: 52,
        left: 8,
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonFormText: {
        color: color,
        fontSize: 18,
        marginLeft: 8,
        fontWeight: 'bold',
        lineHeight: 25,
        textAlign: 'center'
    }
});