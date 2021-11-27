import "./statisticPortal.css"
import { useEffect, useRef } from "react"
import { StatisticTimerTwoHook } from "./statisticTimerTwoHook"

export function StatisticTwoTimer() {
    const [statisticTimeTwo,setStatisticTimeTwo] = StatisticTimerTwoHook()
    const canvasRef = useRef(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        context.clearRect(0,0,context.canvas.width,context.canvas.height)
        context.beginPath()
        context.arc(90, 75, 55, 0, statisticTimeTwo.borderSize * Math.PI);
        context.lineWidth = 6;
        statisticTimeTwo.borderSize > 2 ? context.strokeStyle = "red" : context.strokeStyle = "#00A3FF";
        context.stroke();
    },[statisticTimeTwo.second])

    return (
        <div className="timer-Div">
                <p className="timer">20.04.2021</p>
                {/* <p className="timer"> {statisticTimeTwo.hours + ":" + statisticTimeTwo.minute + ":" + statisticTimeTwo.second} </p> */}
                <canvas ref={canvasRef} className="timering"></canvas>
                <div className="timerButtonDiv">
                    {/* <p className="ActiveUntil">Active until :</p> */}
                    <p className="date">21.03.2021 - 20.04.2021</p>
                    <button className="timerButton" onClick={() => {
                        setStatisticTimeTwo({
                            ...statisticTimeTwo,
                            startTiem:!statisticTimeTwo.startTiem
                        },100)
                    }}>Activate</button>
                </div>
        </div>
    )
}
