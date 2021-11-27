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

    return (
        <div className="userHome">
            <div className="reg-active-channelGroup-contacts-div">
                {
                <Slider {...state.homeSliderSettings}>
                    <HomeSliderPage/>
                    <HomeSliderPage/>
                    <HomeSliderPage/>
                    <HomeSliderPage/>
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
                                style={{animationName:state.animationPath === "/userPerson" ? "timerButton2" : "null"}}
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
                            <a href="mailto:5551234567@mail.ru" className="contactsMessigeImg"><img src="/mainPageImages/contactsMessigeImg.png" alt="contactsMessigeImg"/>AllNet@mail.ru</a>
                            <a href="tel:5551234567" className="contactsCallImg"><img src="/mainPageImages/contactsCallImg.png" alt="contactsCallImg"/>+374 (00) 00-00-00</a>
                            <p className="titleUnderLine"></p>
                            <div className="socialImageDiv">
                                <Link to={{pathname:"https://www.facebook.com/webschoolkz/"}} target="blank" 
                                style={{background:"#6561FF"}}><img src="/mainPageImages/contactsFb.png"alt="contactsFb"/></Link>
                                <Link to={{pathname:"https://workspace.google.com/intl/en/products/gmail/?utm_source=google&utm_medium=cpc&utm_campaign=emea-mena-all-en-dr-bkws-all-lv-trial-p-t4-1010042&utm_content=text-ad-none-none-DEV_c-CRE_539821899813-ADGP_Desk%2BTab%20%7C%20BKWS%20-%20PHR%20%7C%20Txt%20~%20Gmail%20~%20General_gmail-KWID_43700065784973172-kwd-318461586-userloc_9070053&utm_term=KW_gmail-ST_gmail&ds_rl=1259922&gclid=Cj0KCQjwqKuKBhCxARIsACf4XuFaUjrkJ8i25-CYMqnfwcbEU4bnrxXaEJO94Goqap4XIphqVf70KpMaAit0EALw_wcB&gclsrc=aw.ds"}}  target="blank" 
                                style={{background:"#FF1F00"}}><img src="/mainPageImages/contactsGoogle.png"alt="contactsGoogle"/></Link>
                                <Link to={{pathname:"https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}} target="blank"
                                style={{background:"#0085FF"}}><img src="/mainPageImages/contactsTelegram.png"alt="contactsTelegram"/></Link>
                                <Link to={{pathname:"https://web.telegram.org/k/"}} target="blank"
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