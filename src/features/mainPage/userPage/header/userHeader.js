import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, NavLink,Route, } from "react-router-dom"
import User from "../user/user"
import UserHome from "../userHome/userHome"
import "./userHeader.css"
import {headerUserPageImages} from "./images"
import { StatisticMain } from "../userStatistic/statisticMain"
import { UserPlayChannel } from "../userPlayChannel/userPlayChannel"
import { StatisticPortal } from "../statisticPortal/statisticPortal"
import { MessigePerson } from "../messigePerson/messigePerson"
import { StatisticFurther } from "../userStatistic/statisticFurther"
import { StatisticConfirmed } from "../userStatistic/statisticConfirmed"
import { useEffect, useState } from "react"
import "./responsive.css"
import Tarif from "../Tarif/tarif"
import { Redirect } from "react-router-dom"
import { postLogAuth } from "../../postRequest"
import { getUserPage } from "../../getRequest"



function UserHeader({toggle}) {
    const state = useSelector((state) => state.mainPage)
    const [play,setPlay] = useState(false)
    const [animationPath,setAnimationPAth] = useState("")
    const dispatch = useDispatch()
    // console.log("userHeader");

    useEffect(() => { 
        if(Array.isArray(state.userPage)) {dispatch(getUserPage({path:state.server,token:sessionStorage.getItem("authenticated")}))}
    },[])
    

    return (
        <div className="userMainPAge" style={{zIndex:toggle ? "-1" : "inherit"}}>
            <Router>
                <div className="userPageMenu">
                    <div className="iconDiv">
                        {state.svgImages.map((val,index) => {
                            return (
                                <NavLink to={val.path} key={Math.random()} activeClassName={val.activeClass}>
                                    <p>{headerUserPageImages[index]}</p>
                                </NavLink>
                            )
                        })}
                    </div>
                    <button className="exitIcon" onClick={() => {
                        dispatch(postLogAuth({path:state.server,token:sessionStorage.getItem("authenticated")}))
                        sessionStorage.removeItem("authenticated");
                    }}>
                        <img src="/mainPageImages/signOut.png" alt="signOut"/>
                    </button>
                </div>



                <Route path="/userPage/userHome">
                    <UserHome changePlay={(value) => setPlay(value)} changeAnimationPath={(value) => {
                        setAnimationPAth(value)
                    }}/>
                </Route>
                <Route path="/userPage/userPerson">
                    <User animationPath={animationPath} changeAnimationPath={(value) => {
                        setAnimationPAth(value)
                    }}/>
                </Route>
                <Route path="/userStatistic">
                    <StatisticMain/>
                </Route>
                <Route path="/statisticFurther">
                    <StatisticFurther/>
                </Route>
                <Route path="/statisticConfirmed">
                    <StatisticConfirmed/>
                </Route>
                <Route path="/userChannel">
                    <Tarif/>
                </Route>
                <Route path="/statisticPortal">
                    <StatisticPortal/>
                </Route>
                <Route path="/messigePerson">
                    <MessigePerson/>
                </Route>
            </Router>
            <button style={{bottom:play === true ?  "40px" : "80px"}} className="messigeButton"><img src="/mainPageImages/messigeIconForUser.png" alt=""/></button>
        </div>
    )
}

export default UserHeader