import { isValidElement, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { closeLetter, loading } from "../mainPageSlice"
import "./contactUs.css"
import "./responsive.css"



export function ContactUs({toggle}) {
    const state = useSelector((state) => state.mainPage)
    const {messagePhone,messageEmail,contactDivSocialLink} = state.mainContactPagination
    const dispatch = useDispatch()
    const [Valid,setValid] = useState({
        firstInput:"oneMount",
        secondInput:"oneMount",
        textAria:"oneMount",
    })




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
                dispatch(closeLetter())
                window.scrollTo(0, 0)
                document.body.style.overflow = 'hidden';
            }}>
                <div>
                    <input  type="text" placeholder="Name" 
                        style={{outlineColor:Valid.firstInput === "oneMount" ? "transparent" : Valid.firstInput ? "green" : "red"}} 
                        required
                    />
                    <input type="email" placeholder="E-mail" 
                        style={{outlineColor:Valid.secondInput === "oneMount" ? "transparent" : Valid.secondInput ? "green" : "red"}} 
                        required
                    />
                </div>
                <textarea type="text" placeholder="Message" 
                    style={{outlineColor:Valid.textAria === "oneMount" ? "transparent" : Valid.textAria ? "green" : "red"}} 
                    required
                >
                </textarea>
                <button onClick={(e) => {
                    setValid({
                        ...Valid,
                        firstInput:e.target.parentNode[0].validity.valid,
                        secondInput:e.target.parentNode[1].validity.valid,
                        textAria:e.target.parentNode[2].validity.valid
                    })
                }}>Send</button>
            </form>
            </div>
        </div>
    )
}