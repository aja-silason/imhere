import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
    name: string,
    onRemove: () => void,
}

export function Participant({name, onRemove}: ParticipantProps){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}