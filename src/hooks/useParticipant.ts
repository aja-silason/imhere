import { useEffect, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Item = {
    id: number,
    task: string
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
                task: participantName
            }
            const validation: Array<keyof Item> = ["id", "task"];
            for(const key of validation){
                if(payload[key] == undefined || payload[key] == "" || payload[key] == null || payload[key].toString().length <= 4){
                    return Alert.alert("Aviso", "Adicione uma tarefa no campo vazio, com no mínimo 4 caráctere.");
                }
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