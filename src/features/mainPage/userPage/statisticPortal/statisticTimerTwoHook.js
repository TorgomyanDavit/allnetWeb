import { useEffect, useState } from "react";


export function StatisticTimerTwoHook() {
    let [statisticTimeTwo,setStatisticTimeTwo] = useState({
        startTiem:false,
        hours:0,
        minute:0,
        second:0,
        borderSize:0
    })

    useEffect(() => {
        let timeIdTwo;
        if(statisticTimeTwo.startTiem) {
            timeIdTwo = setInterval(() => {
                setStatisticTimeTwo({...statisticTimeTwo,borderSize:statisticTimeTwo.borderSize += 0.0000121});
                setStatisticTimeTwo({...statisticTimeTwo,second:statisticTimeTwo.second += 1});
                // if(statisticTimeTwo.second === 60) {
                //     setStatisticTimeTwo({...statisticTimeTwo,second:statisticTimeTwo.second = 0,minute:statisticTimeTwo.minute += 1});
                // } else if(statisticTimeTwo.minute === 60){
                //     setStatisticTimeTwo({...statisticTimeTwo,hours:statisticTimeTwo.hours += 1,minute:statisticTimeTwo.minute = 0});
                // }else {
                //     setStatisticTimeTwo({...statisticTimeTwo,second:statisticTimeTwo.second += 1});
                // }
            },1000)
        }
        return () => {
            clearInterval(timeIdTwo)
        }
    },[statisticTimeTwo.startTiem])

    return [statisticTimeTwo,setStatisticTimeTwo]
}