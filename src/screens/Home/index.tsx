import { Participant } from "@/src/components/Participant";
import { styles } from "./styles";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRef, useState } from "react";
import useCreateParticipant from "@/src/hooks/useCreateParticipant";

export function Home(){

    const {handleChangeParticipantName, handleParticipantAdd, handleParticipantRemove, participantName, participants} = useCreateParticipant();

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

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
                    <Text style={styles.listEmptyText}>Ninguém chegou ainda no evento. Adicione participante na lista.</Text>
                )}
            />


        </View>
    )
}