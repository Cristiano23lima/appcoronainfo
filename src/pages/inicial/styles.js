import { StyleSheet } from 'react-native';
import constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202124',
    },
    header: {
        marginTop: constants.statusBarHeight + 20,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff'
    },
    body: {
        alignItems: "center",
        marginTop: 30,
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#202124',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 2,
        width: 231,
        height: 70,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        // fontFamily: 'Roboto'
    }
});