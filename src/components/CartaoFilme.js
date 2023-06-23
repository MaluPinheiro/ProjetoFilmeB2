import { Link } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

const Url = 'https://api.otaviolube.com'

export default function Cartoes({ filme }){

    const imgUrl = Url + filme.poster.data.attributes.url;

    return(
        <View style={styles.container}>
            <Text style={styles.Titulo}>{filme.titulo}</Text>
            <Image style={styles.imgFilme} source={{uri: imgUrl}}/>
            <Text style={styles.Sinopse}>Sinopse: {filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + 
            "..." : filme.sinopse}</Text>
            <Link style={styles.link} to={{screen: "MoviesDetails", params:{filme: filme}}}>Saiba mais...</Link>
            <TouchableOpacity style={styles.button}> 
                <Text style={styles.txtBtnComprar}> Comprar </Text>
            </TouchableOpacity>
        </View>
    )
}