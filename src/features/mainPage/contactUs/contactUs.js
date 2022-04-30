import { isValidElement, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { changeloadHeight, closeLetter, loading } from "../mainPageSlice"
import { sendMessag } from "../postRequest"
import "./contactUs.css"
import "./responsive.css"



export function ContactUs({toggle}) {
    const state = useSelector((state) => state.mainPage)
    const {messagePhone,messageEmail,contactDivSocialLink} = state.mainContactPagination
    const dispatch = useDispatch()
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [Valid,setValid] = useState({
        firstInput:"oneMount",
        secondInput:"oneMount",
        textAria:"oneMount",
    })

    const [naemValue,setNameValue] = useState("")
    const [emailValue,setEmailValue] = useState("")
    const [texteriaValue,setTextereaValue] = useState("")

    // const history = useLocation();

    // useEffect(() => {
    //     dispatch(changeloadHeight({height:"99vh"}))
    // },[history.pathname])
    console.log("VALID",Valid);


    return (
        <div className="contactUs">
            <div className="contactUsDiv" style={{zIndex:toggle ? "-1" : "inherit"}} ><h2>Contact Us</h2></div>
            <div className="contactDiv" style={{zIndex:toggle ? "-1" : "inherit"}} >
                <p className="registerNewTitle">Contscts :</p>
                <a href="mailTo:AllNet@mail.ru"><img src="/mainPageImages/messigeimg.svg" alt=""/>{messageEmail}</a>
                <a id="afterLine" href="tel:+374 (00) 00-00-00"><img src="/mainPageImages/phone.svg" alt=""/>{messagePhone}</a>
                <div className="socialSiteIcon">
                    {contactDivSocialLink.map((val) => {
                        return (
                            <Link className="contactLink" to={{pathname:val.Link}} key={Math.random()} target="_blank" style={{background:val.background}}><img src={val.img} alt=""/></Link>
                        )
                    })}
                </div>
            </div>
            <div className="contactData" style={{zIndex:toggle ? "-1" : "inherit"}} onClick={(e) => {
                if(e.target.className === "contactData" ||
                e.target.className === "contactFormTetx") {
                    setValid({
                        firstInput:"oneMount",
                        secondInput:"oneMount",
                        textAria:"oneMount",
                    })
                }
            }}>
            <form className="contactFormTetx" onSubmit={(e) => {
                e.preventDefault()
                let body = e.target
                if(body[0].value.length > 0 && body[1].value.match(mailformat) && body[2].value.length > 0) {
                    dispatch(sendMessag({
                        path:state.server,
                        token:sessionStorage.getItem("authenticated"),
                        body:{ 
                            name:body[0].value,
                            email:body[1].value,
                            message:body[2].value
                        }
                    }));
                    window.scrollTo(0, 0);
                    document.body.style.overflow = 'hidden';
                    setNameValue("");setEmailValue("");setTextereaValue("");
                }

            }}>
                <div>
                    <input  type="text" placeholder="Name" value={naemValue} onChange={(e) => setNameValue(e.target.value)}
                        style={{outlineColor:Valid.firstInput === "oneMount" ? "transparent" : Valid.firstInput ? "green" : "red"}} 
                    />
                    <input placeholder="E-mail" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}
                        style={{outlineColor:Valid.secondInput === "oneMount" ? "transparent" : Valid.secondInput ? "green" : "red"}} 
                    />
                </div>
                <textarea type="text" placeholder="Message" value={texteriaValue}  onChange={(e) => setTextereaValue(e.target.value)}
                    style={{outlineColor:Valid.textAria === "oneMount" ? "transparent" : Valid.textAria ? "green" : "red"}} 
                >
                </textarea>
                <button onClick={(e) => {
                    let body = e.target.form
                    // console.log(e.target.form[0].value);
                    setValid({
                        ...Valid,
                        firstInput:body[0].value.length !== 0,
                        secondInput:body[1].value.match(mailformat),
                        textAria:body[2].value.length > 0
                    })
                }}>Send</button>
            </form>
            </div>
        </div>
    )
}