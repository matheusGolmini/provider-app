import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    container: {
        marginTop: 20,
        margin: 50,
        marginBottom: 100
    },
    task: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#605C99',
        shadowRadius: 3.5,
        elevation: 5
    },
    textDefault: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        color: '#302E4D',
        fontWeight: 'bold',
    },
    description: {
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
    tasksButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    tasksButton2: {
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#605C99',
        height: 30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});