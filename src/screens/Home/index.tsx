import { Participant } from "@/src/components/Participant";
import { styles } from "./styles";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import useParticipant from "@/src/hooks/useParticipant";

export function Home(){

    const {handleChangeParticipantName, handleParticipantAdd, handleParticipantRemove, participantName, participants} = useParticipant();

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Tarefas diárias de Anania Augusto</Text>
            <Text style={styles.eventDate}>Agosto de 2024.</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={handleChangeParticipantName} 
                    value={participantName}
                />

                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item} 
                renderItem={({item}) => (    
                    <Participant name={item} onRemove={() => handleParticipantRemove(item)}/>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Sem tarefas até ao momento{"\n"} adicione as suas actividades diárias</Text>
                )}
            />


        </View>
    )
}