import { styles } from "@/assets/styles/style";
import { Text, View } from "react-native";

export default function Index(){
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Nome do Evento</Text>
            <Text style={styles.text2}>Sexta, 4 de Novembro de 2022.</Text>
        </View>
    )
}