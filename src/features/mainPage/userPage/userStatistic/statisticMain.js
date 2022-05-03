
import { React, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
// import { HistoryPage } from "./historyPage"
import "./statisticMain.css"
import "./animationResponsive.css"

import { changeAnimation, chengRowCountPagination, paginationCount } from "../../mainPageSlice"
import { getUserHomePage, getUserPage } from "../../getRequest"
import HistoryPage from "./historyPage"
import { useTranslation } from "react-i18next"


export function StatisticMain() {
    const state = useSelector((state) => state.mainPage)
    const [t,i18n] = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {return () => dispatch(changeAnimation({value:"/userPage/userStatistic/table1"}))},[])
    const [showSelect,setShowSelect] = useState(true)
    const [showValue,setShowValue] = useState(state.table.rowCount)
    const childFunc = useRef(null)

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
            <section 
                className="historyMovement"
                style={{animationName:state.animationPath === "/userPage/userChannel" ? "historyMovement" : "null"}} 
            >
                <p style={{animationName:state.animationPath === "/userPage/userChannel" ? "pHistory" : "null"}}>
                    <img src="/mainPageImages/clock.svg" alt="clock"/>
                    {t("description.historyMovement")}
                </p>
                <div className="slectShow" style={{animationName:state.animationPath === "/userPage/userChannel" ? "pHistory" : "null"}}>
                    <span>{t("description.show")}</span>
                        <form style={{position:"relative"}} onSubmit={(e) => {
                            e.preventDefault()
                            setShowSelect(!showSelect)
                        }}>
                            <div className="clickToShow" onClick={() => { 
                                setShowSelect(!showSelect)
                            }}></div>  
                            <input type="text" disabled className="slectInput" value={showValue} 
                                style={{
                                    borderBottomRightRadius:showSelect ? "10px" : "unset",
                                    borderBottomLeftRadius:showSelect ? "10px" : "unset"
                                }}
                            />
                            <div className="optionSelect" style={{display:showSelect ? "none" : "flex"}}>
                                {state.table.Row.map((val,index) => {
                                    return <button key={index} onClick={(event) => {
                                        childFunc.current()
                                        dispatch(paginationCount(0))
                                        dispatch(chengRowCountPagination(val))
                                        setShowValue(val)
                                        dispatch(getUserHomePage({path:state.server,token:sessionStorage.getItem("authenticated")}));
                                    }}>{val}</button>
                                })}
                            </div>
                        </form>
                    <span>{t("description.rows")}</span>
                </div>
            </section>
            <HistoryPage childFunc={childFunc}/>
        </main>
    )
}

