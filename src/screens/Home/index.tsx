import { Participant } from "@/src/components/Participant";
import { styles } from "./styles";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import useParticipant from "@/src/hooks/useParticipant";
import useGetDate from "@/src/hooks/useGetDate";

export function Home(){

    const {handleChangeParticipantName, handleParticipantRemove, participantName,  save, dt, isLoading} = useParticipant();
    const {currentDate, month} = useGetDate();

    return (
        <View style={styles.container}>
            <Text style={styles.eventDate}>{` ${month.toUpperCase()} de ${currentDate.getUTCFullYear()}`}</Text>
            <Text style={styles.eventName}>Tarefas diárias</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Tipo de Tarefa"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={handleChangeParticipantName} 
                    value={participantName}
                />

                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={save}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            {
                isLoading ? (
                    <>
                        <Text>Dados Carregando...</Text>
                    </>
                    ) : (    
                        <FlatList
                        data={dt}
                        keyExtractor={(item) => item.id.toString()} 
                        renderItem={({item}) => (    
                            <Participant name={item.task} onRemove={() => handleParticipantRemove(item.id)}/>
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <Text style={styles.listEmptyText}>Sem tarefas até ao momento{"\n"} adicione as suas actividades diárias</Text>
                        )}
                    />
                )
            }


        </View>
    )
}