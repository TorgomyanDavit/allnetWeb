import { useEffect, useState } from "react"
import { useSelector } from "react-redux"



export function AnimationTimer() {
    const state = useSelector((state) => state.mainPage)
    const [animationDisplay,setanimationDisplay] = useState(true)

    


    useEffect(() => {
        let id = setTimeout(() => {
            setanimationDisplay(false)
        },1100)

        return () => clearTimeout(id)
    },[])

    return (
        animationDisplay ?  <div className="animationTimer"
            style={{animationName:state.animationPath === "/userPage/statisticPortal" ? "animation-time" : "null",}}>
            <div className="animation-timer">
                <p className="timer"> 0.0.0 </p>
                <div className="timerButtonDiv">
                    <p className="ActiveUntil">Active until :</p>
                    <p className="date">21.03.2021 - 20.04.2021</p>
                    <button className="timerButton">Activate</button>
                </div>
            </div>

            <div className="animation-timer" style={{display:animationDisplay}}>
                <p className="timer"> 0.0.0 </p>
                <div className="timerButtonDiv">
                    <p className="ActiveUntil">Active until :</p>
                    <p className="date">21.03.2021 - 20.04.2021</p>
                    <button className="timerButton">Activate</button>
                </div>
            </div>
        </div> : null
    )
}