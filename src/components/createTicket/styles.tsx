import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 50,
    },
    container: {
        marginTop: 55,
        margin: 25
    },
    header: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold',
        marginBottom: 40
    },
    subheader: {
        marginTop: 15,
        fontSize: 18,
        color: '#41414d',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInput: {
        marginTop:10,
        borderWidth: 4,
        borderColor: '#D3D3D3',
        padding:10,
        textAlignVertical: 'top'
    },
    picker: {
        height: 40,
        borderWidth: 2,
        borderColor: '#D3D3D3'
    },
    button: {
        margin: 20
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tasksButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    tasksButton2: {
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 5,
    },
    buttonText2: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});