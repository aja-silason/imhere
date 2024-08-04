import { useEffect, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Item = {
    id: number,
    participantName: string
}

const useParticipant = () => {

    const [participantName, setParticipantName] = useState<string>("");
    const [dt, setDt] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        load();
    }, [])

    const handleChangeParticipantName = (value: string) => {
        setParticipantName(value);
    }

    const save = async () => {
        try{
            const payload: Item = {
                id: Date.now(),
                participantName
            }
            const newData = [...dt, payload]
            setDt(newData);
            await AsyncStorage.setItem("task", JSON.stringify(newData));
            setParticipantName("");
        } catch(e: any){
            throw new Error("Falha ao pegar os dados");
        }
    }   

    const load = async () => {
        try {
            const storedData = await AsyncStorage.getItem("task");
            if(storedData !== null) {
                const parseData = JSON.parse(storedData)
                setDt(parseData);
            }
        } catch (error: any) {
            throw new Error("Falha ao pegar os dados", error);
        } finally{
            setIsLoading(false);
        }
    };

    const removeParticipant = async (id: number) => {
        try {
          const newParticipants = dt.filter((participant: any) => participant.id !== id);
          setDt(newParticipants);  
          await AsyncStorage.setItem("task", JSON.stringify(newParticipants));
        } catch (error) {
            throw new Error("Mau funcionamento da app");            
        }
      };

      const handleParticipantRemove = (id: number) => {
          Alert.alert("Aviso", `Concluir tarefa`, [
            {
                text: "Sim",
                onPress: () => {
                    removeParticipant(id);
                }
            },
            {
                text: "Não",
                style: "cancel"
            }
          ])
      }  

    return {participantName,  handleChangeParticipantName, handleParticipantRemove, save, dt, isLoading }

}

export default useParticipant;