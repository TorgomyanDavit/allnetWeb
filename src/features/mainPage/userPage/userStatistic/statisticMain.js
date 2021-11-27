import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { HistoryPage } from "./historyPage"
import "./statisticMain.css"
import "./animationResponsive.css"

import { changeAnimation } from "../../mainPageSlice"


export function StatisticMain() {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    useEffect(() => {return () => dispatch(changeAnimation({value:"/userStatistic/table1"}))},[])
    return (
        <main className="statisticMain">
            <section className="balanAndInternalTransition">
                <div className="balance">
                    <p className="dollar">
                        <span className="span1"><img src="/mainPageImages/usd-circle.svg" alt="fsdfsf"/>Balance :</span>
                        <span>$<span>100,00</span></span>
                    </p>
                    <NavLink  to="/statisticFurther" className="balanceButton">Top up</NavLink>
                </div>
                <div className="balance">
                    <p className="dollar">
                        <span className="span1"><img src="/mainPageImages/repeat.svg" alt="fsdfsdfsdfsd"/>Internal translation :</span>
                    </p>
                    <NavLink to="/statisticConfirmed" className="balanceButton">Start the transfer</NavLink>
                </div>
            </section>
            <section style={{animationName:state.animationPath === "/userChannel" ? "historyMovement" : "null"}}
                className="historyMovement">
                <p style={{animationName:state.animationPath === "/userChannel" ? "pHistory" : "null"}}>
                    <img src="/mainPageImages/clock.svg" alt="clock"/>
                    The history of the movement of funds on your account
                </p>
                <p  style={{animationName:state.animationPath === "/userChannel" ? "pHistory" : "null"}}>
                    <span>Show</span>
                        <select>
                            <option>10</option>
                        </select>
                    <span>entries</span>
                </p>
            </section>
            <HistoryPage/>
        </main>
    )
}

