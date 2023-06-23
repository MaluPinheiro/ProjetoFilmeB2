import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGTH = Dimensions.get('window').height*0.7;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#55B88A',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: "center",
        width: MAX_WIDTH,
        height: MAX_HEIGTH,
        borderWidth: 4,
        borderColor: '#0F4531',
        borderRadius: 10,
    },
    imgFilme: {
        width: '150px',
        height: '180px',
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10
    },
    Titulo: {
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 30
    },
    Sinopse: {
        fontSize: 18,
        marginTop: 5,
        textAlign: "justify",
    },
    button: {
        backgroundColor: '#0F4531',
        borderRadius: 3,
        padding: 6,
        borderWidth: 1
    },
    txtBtnComprar: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    link:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        padding: 5,
    },
    })
    export default styles;