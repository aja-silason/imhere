import { useEffect, useState } from "react";

type monthType = {
    janeiro: number,
    fevereiro: number,
    marco: number,
    abril: number,
    maio: number,
    junho: number,
    julho: number,
    agosto: number,
    setembro: number,
    outubro: number,
    novembro: number,
    dezembro: number,
}

const useGetDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [month, setMonth] = useState("");
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentDate(new Date());
        }, 60000);

        getMonth();

    return () => clearInterval(intervalId);
    }, []);

    function getMonth(){
        const month: monthType = {
            janeiro: 1,
            fevereiro: 2,
            marco: 3,
            abril: 4,
            maio: 5,
            junho: 6,
            julho: 7,
            agosto: 8,
            setembro: 9,
            outubro: 10,
            novembro: 11,
            dezembro: 12
        }
        const ismonth: Array<keyof monthType> = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        for(const key of ismonth) {
            if(month[key] === currentDate.getMonth() + 1){
                setMonth(key);
            }
        }
   }

    return { currentDate, month}

}

export default useGetDate;