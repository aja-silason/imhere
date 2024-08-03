import { useState } from "react";
import { Alert } from "react-native";

const useParticipant = () => {

    const [participants, setParticipant] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState<string>("");

    const handleChangeParticipantName = (value: string) => {
        setParticipantName(value);
    }

    function handleParticipantAdd(){ 
        if(participants.includes(participantName)){
            return Alert.alert("Aviso", "Usuário já existente");
        }
        setParticipant( prevState => [...prevState, participantName]);
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Aviso", `Remover o participante ${name}`, [
            {
                text: "Sim",
                onPress: () => {
                    setParticipant(participants.filter((participant: string) => participant !== name));
                    Alert.alert("Aviso!", "Usuário removido da lista!")
                },
            },
            {
                text: "Não",
                style: "cancel"
            }
        ]);
    }

    return {participantName, participants, handleChangeParticipantName, handleParticipantAdd, handleParticipantRemove }

}

export default useParticipant;