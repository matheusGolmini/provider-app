import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    logo: {
        width: 250,
        height: 250,
        borderRadius: 100,
    },
    
    button: {
        backgroundColor: '#302E4D',
        marginTop: 10,
        width: 300,
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },

    textClick: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },

    headerText: { 
        fontSize: 25,
        color: '#302E4D',
        marginBottom:10,
        alignSelf:"center",
        fontWeight:"bold"
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    inputAreaPassword: {
        marginTop: 10,
        width: 300,
        height: 50,
        backgroundColor: '#302E4D',
        borderRadius: 10,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputPass: {
        width: '85%',
        backgroundColor: '#FFF',
        height: 50,
        padding: 8,
        fontSize: 16,
        color: '#302E4D',
        fontWeight: 'bold',
        borderColor: '#302E4D',
        borderWidth: 1,
        borderRadius: 10,
    },

    inputText: {
        width: '100%',
        backgroundColor: '#FFF',
        height: 50,
        padding: 8,
        fontSize: 16,
        color: '#302E4D',
        fontWeight: 'bold',
        borderColor: '#302E4D',
        borderWidth: 1,
        borderRadius: 10,
    },
    input: {
        marginTop: 10,
        width: 300,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#302E4D',
        borderRadius: 10,
        fontWeight: 'bold',
    },

    iconEye: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#302E4D',
        borderWidth: 5,
        borderRadius: 15,
        borderColor: '#302E4D'
    },
})

export default styles;