import "./statisticMain.css"
import {BrowserRouter as Routher, NavLink,Route } from "react-router-dom"
import { Table } from "./table"
import { useDispatch, useSelector } from "react-redux"
import { paginationCount } from "../../mainPageSlice"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

export function HistoryPage({showValue,child}) {
    const state = useSelector((state) => state.mainPage.table)
    const dispatch = useDispatch()
    let [activePage,setactivePage] = useState(0)
    let [activePagePOsition,setactivePagePOsition] = useState(0)
    let [changeActive,setchangeActive] = useState(false)

    const linkPref = useRef(null)


    useEffect(() => {
        child(activePage)
    },[changeActive])



    useEffect(() => {
        setactivePage(--showValue)
        setTimeout(() => {
            for(let item  of linkPref.current.children) {
                if(item.classList.contains("activeBalance")) {
                    setactivePagePOsition(-item.offsetLeft)
                }
            }
        },0)
    },[showValue])

    return (
            <Routher>
                <main className="historyMain">
                    <Route path="/userStatistic/table1">
                        <Table/>
                    </Route>
                    <div className="footerTable">
                        <button className="buttonSlack" onClick={() => {
                            if(activePage >= 1) {
                                setchangeActive(!changeActive)
                                setactivePage(--activePage)
                                for(let item  of linkPref.current.children) {
                                    if(item.classList.contains("activeBalance")) {
                                        setactivePagePOsition(-item.offsetLeft + 26)
                                    }
                                }
                            }
                        }}><img src="/mainPageImages/slackLeft.png" alt=""/></button>

                        <div className="linkP" >
                            <div className="innerLinkP" ref={linkPref} style={{left:activePagePOsition}}>
                                {state.countPage.map((val,index) => {
                                    return (
                                        <button key={index} className={`butPagination ${activePage === index ? "activeBalance" : ""}`} onClick={(e) => {
                                            setchangeActive(!changeActive)
                                            setactivePage(index)
                                            setactivePagePOsition(- e.target.offsetLeft)
                                            // dispatch(paginationCount(10))
                                        }}>{index+1}</button>
                                    )
                                })}
                            </div>
                        </div>

                        <span className="dots"> ... </span>

                        <button className={`butPagination ${activePage === state.countPage.length -1 ? "activeBalance" : ""}`} 
                            onClick={() => {
                                setchangeActive(!changeActive)
                                setactivePage(state.countPage.length - 1)
                                setTimeout(() => {
                                    for(let item  of linkPref.current.children) {
                                        if(item.classList.contains("activeBalance")) {
                                            setactivePagePOsition(-item.offsetLeft)
                                        }
                                    }
                                },0)
                            }}>{state.countPage.length}
                        </button>
                       
                            
                        <button className="buttonSlack" onClick={(e) => {
                            if( activePage < state.countPage.length - 1 ) {
                                setchangeActive(!changeActive)
                                setactivePage(++activePage)
                                for(let item  of linkPref.current.children) {
                                    if(item.classList.contains("activeBalance")) {
                                        setactivePagePOsition(-item.offsetLeft - 26)
                                    }
                                }
                            }
                            }}><img src="/mainPageImages/slackRight.png" alt=""/>
                        </button>
                    </div>
                </main>
            </Routher>
    )
}