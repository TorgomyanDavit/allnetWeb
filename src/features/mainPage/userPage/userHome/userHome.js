import Slider from "react-slick";
import HomeSliderPage from "./homePageSlider";
import { useDispatch, useSelector } from "react-redux";
import { Hook } from "./Hooks";
import { useEffect, useRef, useState } from "react";
import { ChannelGroup } from "./channelGroup";
import { UserChannels } from "./userChannels";
import { Link } from "react-router-dom"
import { changeAnimation } from "../../mainPageSlice"
import "./userHome.css"
import "./responsiveHome.css"
import "./animationResponsive.css"
import { getUserData, getUserPage } from "../../getRequest";







function UserHome({changePlay}) {
    const state = useSelector((state) => state.mainPage)
    let [time,setTime] = Hook()
    const canvasRef = useRef(null)
    const dispatch = useDispatch()
    
    useEffect(() => {
        changePlay(false)
        return () => {
            changePlay(true)
            dispatch(changeAnimation({value:"/userPage/userHome"}))
        }
    },[])
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        context.clearRect(0,0,context.canvas.width,context.canvas.height)
        context.beginPath()
        context.arc(90, 75, 55, 0,time.borderSize * Math.PI);
        context.lineWidth = 6;
        time.borderSize > 2 ? context.strokeStyle = "red" : context.strokeStyle = "#00A3FF";
        context.stroke();
    },[time.second])
    const {userPage,tariffType,orderTariff,contacts} = state.userHomePage 



    return (
        <div className="userHome">
            <div className="reg-active-channelGroup-contacts-div">
                {
                <Slider {...state.homeSliderSettings}>
                    {   
                        Array.isArray(userPage) ? 
                        userPage.map((val) => {
                            return <HomeSliderPage key={val.id} data={val}/>
                        }) : <HomeSliderPage key={{}} data={{}}/>
                    }
                </Slider>
                }
                <div className="channel-Active-Groupe">
                    <div className="active-contacts-div">
                        <div className="timer-Div" id="timerDiv1" 
                            style={{animationName:state.animationPath === "/statisticPortal" ? "timerDiv1" : "null"}}
                        >
                            <p className="timer">20.04.2021{/* {time.hours + ":" + time.minute + ":" + time.second} */}</p>
                            <canvas ref={canvasRef} className="timering"></canvas>
                            <div className="timerButtonDiv">
                                {/* <p className="ActiveUntil">Active until :</p> */}
                                <p className="date">21.03.2021 - 20.04.2021</p>
                                <button 
                                style={{animationName:state.animationPath === "/userPage/userPerson" ? "timerButton2" : "null"}}
                                className="timerButton"  id="timerButton2" onClick={() => {
                                    setTime({
                                        ...time,
                                        startTiem:!time.startTiem
                                    },100)
                                }}>Activate</button>
                            </div>
                        </div>
                        <div className="contacts">
                            <p className="titel-Contacts">
                                Contscts :
                            </p>
                            <p className="titleUnderLine"></p>
                            <a href={`mailto:${contacts ? contacts[0].email : ""}`} className="contactsMessigeImg"><img src="/mainPageImages/contactsMessigeImg.png" alt="contactsMessigeImg"/>{contacts ? contacts[0].email : ""}</a>
                            <a href={`tel:${contacts ? contacts[0].phone : ""}`} className="contactsCallImg"><img src="/mainPageImages/contactsCallImg.png" alt="contactsCallImg"/>{contacts ? contacts[0].phone : ""}</a>
                            <p className="titleUnderLine"></p>
                            <div className="socialImageDiv">
                                <Link to={{pathname: contacts ? contacts[0].facebook_link : ""}} target="blank" 
                                style={{background:"#6561FF"}}><img src="/mainPageImages/contactsFb.png"alt="contactsFb"/></Link>
                                <Link to={{pathname: contacts ? contacts[0].google_link : ""}}  target="blank" 
                                style={{background:"#FF1F00"}}><img src="/mainPageImages/contactsGoogle.png"alt="contactsGoogle"/></Link>
                                <Link to={{pathname: contacts ? contacts[0].telegram_link : ""}} target="blank"
                                style={{background:"#0085FF"}}><img src="/mainPageImages/contactsTelegram.png"alt="contactsTelegram"/></Link>
                                <Link to={{pathname: contacts ? contacts[0].twitter_link : ""}} target="blank"
                                style={{background:"#282828"}}><img src="/mainPageImages/contactsTwitter.png"alt="contactsTwitter"/></Link>
                            </div>
                        </div>
                    </div>
                    <ChannelGroup/>
                </div>
            </div>              
            <UserChannels/>
        </div>
    )
}

export default UserHome