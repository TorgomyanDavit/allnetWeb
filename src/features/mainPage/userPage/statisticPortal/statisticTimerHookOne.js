import { useEffect, useState } from "react";


export function StatisticTimerOneHook() {
    let [statisticTimeOne,setStatisticTimeOne] = useState({
        startTiem:false,
        hours:0,
        minute:0,
        second:0,
        borderSize:0
    })

    useEffect(() => {
        let timeIdOne;
        if(statisticTimeOne.startTiem) {
            timeIdOne = setInterval(() => {
                setStatisticTimeOne({...statisticTimeOne,borderSize:statisticTimeOne.borderSize += 0.0000121});
                setStatisticTimeOne({...statisticTimeOne,second:statisticTimeOne.second += 1});
                // if(statisticTimeOne.second === 60) {
                //     setStatisticTimeOne({...statisticTimeOne,second:statisticTimeOne.second = 0,minute:statisticTimeOne.minute += 1});
                // } else if(statisticTimeOne.minute === 60){
                //     setStatisticTimeOne({...statisticTimeOne,hours:statisticTimeOne.hours += 1,minute:statisticTimeOne.minute = 0});
                // }else {
                //     setStatisticTimeOne({...statisticTimeOne,second:statisticTimeOne.second += 1});
                // }
            },1000)
        }

        return () => {
            clearInterval(timeIdOne)
        }
    },[statisticTimeOne.startTiem])

    return [statisticTimeOne,setStatisticTimeOne]
}