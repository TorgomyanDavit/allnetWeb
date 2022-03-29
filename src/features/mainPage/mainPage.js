import { useState } from "react"
import { Route, Switch } from "react-router"
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
import { useSelector } from "react-redux"
import { Router } from "react-router-dom"
import Letter from "./contactUs/reCeiveLetter.js"
import { ForgetPassword } from "./userPage/forgetPassword/forgetPassword.js"
import { ReceiveLetter } from "./userPage/forgetPassword/receiveLet.js"
import { NewPassword } from "./userPage/forgetPassword/newPassword.js"

function MainPage() {
    const state = useSelector((state) => state.mainPage)

    let [type,setType] = useState("block")
    let [Width,setWidth] = useState("block")
    const [toggle,setToggle] = useState(false)

    return (
        <div className="MainPage">
           <Headers type={type} Width={Width} toggle={toggle} setToggle={setToggle}/>
           { state.receiveLetterShow ? <Letter/> : null }
           <Switch>
                {state.TarifThanksShow ? <Thanks/> : null}
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
                <Route path="/newPassword">
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