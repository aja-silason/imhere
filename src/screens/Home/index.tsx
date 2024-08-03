import { Participant } from "@/src/components/Participant";
import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home(){

    function handleParticipantAdd (){ 
        console.log("Voce adicionou participante..."); 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Nome do Participante"
                placeholderTextColor="#6b6b6b" 
                />

                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant/>
            <Participant/>
            <Participant/>
            <Participant/> 

        </View>
    )
}