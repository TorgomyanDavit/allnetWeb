import "./statisticPortal.css"
import "./responsivePortal.css"
import "./animationResponsive.css"


import { useEffect, useRef } from "react"
import { StatisticTimerOneHook } from "./statisticTimerHookOne"
import { StatisticTwoTimer } from "./statisticTimerTwo"
import { useDispatch, useSelector } from "react-redux"
import { checkLink,checkPlaceholder } from "../../mainPageSlice"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { changeAnimation } from "../../mainPageSlice"



export function StatisticPortal() {
    const state = useSelector((state) => state.mainPage)
    const [statisticTimeOne,setStatisticTimeOne] = StatisticTimerOneHook()
    const canvasRef = useRef(null)
    const dispatch = useDispatch()
    useEffect(() => {return () => dispatch(changeAnimation({value:"/statisticPortal"}))},[])
    
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        context.clearRect(0,0,context.canvas.width,context.canvas.height)
        context.beginPath()
        context.arc(90, 75, 55, 0,statisticTimeOne.borderSize  * Math.PI);
        context.lineWidth = 6;
        statisticTimeOne.borderSize > 2 ? context.strokeStyle = "red" : context.strokeStyle = "#00A3FF";
        context.stroke();
    },[statisticTimeOne.second])

    return (
        <section className="statisticPortal">
            <div className="globalTmerDiv">
                <div className="timer-Div" id="timerDivTwo" 
                    style={{animationName:state.animationPath === "/userPage/userHome" ? "timerDivTwo" : "null"}}
                >
                    <p className="timer">20.04.2021</p>
                    {/* <p className="timer"> {statisticTimeOne.hours + ":" + statisticTimeOne.minute + ":" + statisticTimeOne.second} </p> */}
                    <canvas ref={canvasRef} className="timering"></canvas>
                    <div className="timerButtonDiv">
                        {/* <p className="ActiveUntil">Active until :</p> */}
                        <p className="date">21.03.2021 - 20.04.2021</p>
                        <button className="timerButton" id="timerButton" 
                        style={{animationName:state.animationPath === "/userPerson" ? "timerButton" : "null"}}
                        onClick={() => {
                            setStatisticTimeOne({
                                ...statisticTimeOne,
                                startTiem:!statisticTimeOne.startTiem
                            },100)
                        }}>Activate</button>
                    </div>
                </div>  
                {/* <StatisticTwoTimer/> */}
            </div>
            <form className="formPortal" onSubmit={(e) => {
                e.preventDefault()
                dispatch(checkPlaceholder({id:state.PortalId}))
            }}>
                {state.formPortal.map((val) => {
                    return (
                        <p key={val.id} className="inputPTag">
                            <span>{val.name}</span>
                            <input type="text" value={val.link} placeholder={val.placeholder} onChange={(e) => {
                                dispatch(checkLink({id:val.id,value:e.target.value}))
                            }}/>
                            <CopyToClipboard text={val.placeholder}>
                                <span className="copy"><img src="/mainPAgeImages/copy.png" alt=""/></span>
                            </CopyToClipboard>
                        </p>
                    )
                })}
                <button style={{display:"none"}}></button>
            </form>
        </section>
    )
}