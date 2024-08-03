import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant(){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>Anania Augusto</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}