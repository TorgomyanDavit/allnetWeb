import { useEffect, useRef, useState } from "react"
import { Route, Switch} from "react-router"
import { About } from "./about/about.js"
import { Faq } from "../mainPage/FAQ/faq"
import { Headers } from "./header/header.js"
import Main from "./main/main.js"
import "./mainPage.css"
import Register from "./registerPage/register.js"
import SignIn from "./signInPage/signIn.js"
import UserHeader from "./userPage/header/userHeader.js"
import { ContactUs } from "./contactUs/contactUs.js"
import Thanks from "./userPage/Tarif/thankyouPopUp.js"
import { useDispatch, useSelector } from "react-redux"
import { Router } from "react-router-dom"
import Letter from "./contactUs/reCeiveLetter.js"
import { ForgetPassword } from "./userPage/forgetPassword/forgetPassword.js"
import { ReceiveLetter } from "./userPage/forgetPassword/receiveLet.js"
import { NewPassword } from "./userPage/forgetPassword/newPassword.js"
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { getAllContent } from "./getRequest.js"
import {useParams} from "react-router-dom"
import CardDate from "./userPage/Tarif/cardData.js"
import { changeloadHeight } from "./mainPageSlice.js"

function MainPage() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.mainPage);
    const Authenticated = sessionStorage.getItem("authenticated");
    const history = useLocation();
    const MainRef = useRef();

    useEffect(() => {
        console.log(window.innerHeight,"useEFfect");
        if(window.innerHeight > MainRef.current.clientHeight) {
            MainRef.current.style.minHeight = window.innerHeight + "px"
            dispatch(changeloadHeight({height:window.innerHeight + "px"}))
        } else {
            MainRef.current.style.minHeight = "fit-content"
            dispatch(changeloadHeight({height:MainRef.current.clientHeight + "px"}))
        }
    },[])


    let [type,setType] = useState("block");
    let [Width,setWidth] = useState("block");
    const [toggle,setToggle] = useState(false);
    let err = /[/]newPassword[/][\d|\w|\W]+@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pathName = history.pathname === "/" || history.pathname === "/register" || history.pathname === "/signIn"
    || history.pathname === "/recLetter" || history.pathname === "/forgetPassword" || !!err.exec(history.pathname);
    const globalPath = history.pathname === "/about" || history.pathname === "/FAQ" || history.pathname === "/contactUs" 
    useEffect(() => { if( (pathName === true || globalPath === true) ) {  dispatch(getAllContent(state.server))} },[globalPath] )
    // let reg = /^\d+\s[|]\s[\d|\w|\W]+/for authentication token
    if(pathName === true && !!Authenticated === true ) {return <Redirect to="/userPage/userHome"/>}  
    else if(pathName === false && !!Authenticated === false && globalPath === false ) {return <Redirect to="/signIn"/>}
    

    return (
        <div className="MainPage" ref={MainRef} >
           <Headers type={type} Width={Width} toggle={toggle} setToggle={setToggle}/>
           { state.receiveLetterShow ? <Letter/> : null }

           <Switch>
                {/* {state.TarifThanksShow ? <Thanks/> : null} */}
                {state.TarifThanksShow ? <CardDate/> : null}
                <Route path="/about">
                    <About toggle={toggle}/>
                </Route>
                <Route path="/FAQ">
                    <Faq toggle={toggle}/>
                </Route>
                <Route path="/contactUs">
                    <ContactUs toggle={toggle}/>
                </Route>
                <Route path="/forgetPassword">
                    <ForgetPassword/>
                </Route>
                <Route path="/recLetter">
                    <ReceiveLetter/>
                </Route>
                <Route path="/newPassword/:token/:email">
                    <NewPassword/>
                </Route>
                <Route path="/register">
                    <Register toggle={toggle}/>
                </Route>
                <Route path="/signIn">
                    <SignIn toggle={toggle}/>
                </Route>
                <Route path="/userPage">
                    <UserHeader toggle={toggle}/>
                </Route>
                <Route path="/">
                    <Main changeType = {(display,size) => {
                        setType(display)
                        setWidth(size)
                    }} toggle={toggle}/>
                </Route>
           </Switch>


        </div>
    )
}

export default MainPage