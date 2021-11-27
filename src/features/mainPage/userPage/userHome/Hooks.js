import { useEffect, useState } from "react";


export function Hook() {

    
    let [time,setTime] = useState({
        startTiem:false,
        hours:0,
        minute:0,
        second:0,
        borderSize:0
    })


    useEffect(() => {
        let timeId;
        if(time.startTiem) {
            timeId = setInterval(() => {
                setTime({...time,borderSize:time.borderSize += 0.0000121});
                setTime({...time,second:time.second += 1});

                // if(time.second === 60) {
                //     setTime({...time,second:time.second = 0,minute:time.minute += 1});
                // } else if(time.minute === 60){
                //     setTime({...time,hours:time.hours += 1,minute:time.minute = 0});
                // }else {
                //     setTime({...time,second:time.second += 1});
                // }
            },1000)
        }

        return () => {
           clearInterval(timeId)
        }
    },[time.startTiem])

    return [time,setTime]
}
