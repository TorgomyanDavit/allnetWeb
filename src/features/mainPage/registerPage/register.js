import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { changeRegAndSignImgdisplay, registerAuth } from "../mainPageSlice"
import { postRegister } from "../postRequest"
import "./register.css"
import "./responsive.css"
import axios from "axios"
import { Redirect } from "react-router-dom"
import { useTranslation } from "react-i18next"



function Register({toggle}) {
    const state = useSelector( (state) => state.mainPage )
    let Authenticated = sessionStorage.getItem("authenticated");
    const [t,i18n] = useTranslation()


    const dispatch = useDispatch()
    let [type,setType] = useState( {password:"password",repeatPassword:"password"} )
    const [checkedAggre,setCheched] = useState(false)
    const [borderChecked,setborderChecked] = useState(false)
    const [nameField,setNameField] = useState(false)
    const [emailField,setemailField] = useState(false)
    const [passwordField,setpasswordField] = useState(false)
    const [repeatPasswordField,setrepeatPasswordField] = useState(false)
    if(state.regEmailErrorAuthenticated) { setTimeout(() => { dispatch( registerAuth() ) },3000) }
    if(Authenticated) {return <Redirect to="/userPage/userHome"/>}

    return (
        <div className="registerMAin" style={{zIndex:toggle ? "-1" : "inherit"}}>
            <div className="registerImgDiv">
                <img src="/mainPageImages/registerImg.png" alt="registerImg"/>
            </div>
            <div className="loginDiv">
                <div className="RegisterButtonDiv">
                    <NavLink to="/register" className="registerButton" activeClassName="activeRegisterButton">
                        {t("description.home.register")}
                        <p className="registerButtonUnderLine"></p>
                    </NavLink>
                    <NavLink to="/signIn" className="registerButton" activeClassName="activeSignInButton">
                        {t("description.home.signIn")}
                        <p className="signInButtonUnderLine"></p>
                    </NavLink>
                </div>
                <div className="inputDiv">
                    <form className="formRegistration" onSubmit={(e) => {
                        e.preventDefault()
                        let input = e.target
                        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if((input[2].value === input[4].value) && input[2].value.length > 5 && checkedAggre === true && !!input[1].value.match(mailformat) === true) {
                            dispatch(postRegister({path:state.server,body:{ username:input[0].value,email:input[1].value,password:input[2].value}}));
                        }
                        else if(!input[0].value) {setNameField(true);setTimeout(() => {setNameField(false)},3000)}
                        else if(!(input[1].value.match(mailformat))) {setemailField(true);setTimeout(() => {setemailField(false)},3000)}
                        else if(!(input[2].value.length > 5)) {setpasswordField(true);setTimeout(() => {setpasswordField(false)},3000)}
                        else if(!(input[2].value === input[4].value)) {setrepeatPasswordField(true);setTimeout(() => {setrepeatPasswordField(false)},3000)}
                        else if(!checkedAggre) {setborderChecked(true);setTimeout(() => {setborderChecked(false)},3000)}
                    }}>
                        <label>
                            <input type="text" placeholder={t("description.placeholder.name")} className={`${nameField ? "outLIneError" : ""}`} onFocus={() => setNameField(false)}/>
                            {nameField ? <p className="refusedMessage regRefus">This Name is not defined</p> : ""}
                        </label>
                        <label>
                            <input placeholder={t("description.placeholder.email")} className={`${emailField ? "outLIneError" : state.regEmailErrorAuthenticated ? "outLIneError"  : ""}`} onFocus={() => setemailField(false)}/>
                            {
                                emailField ? <p className="refusedMessage regRefus">"The email must be a valid email address."</p> : 
                                state.regEmailErrorAuthenticated ? <p className="refusedMessage regRefus">the email has already been taken.</p> : ""
                            }
                        </label>
                        <label className="labelForPassvord">
                            <input type={type.password} placeholder={t("description.placeholder.password")} className={`${passwordField ? "outLIneError" : ""}`} onFocus={() => setpasswordField(false)}/>
                            <button onClick={(e) => { 
                                e.preventDefault();
                                setType({ 
                                    ...type,
                                    password:type.password === "password" ? "text" : "password"
                                })
                            }}>
                                <img src="/mainPageImages/showValue.png" alt="showValueImg"/>
                            </button>
                            {passwordField ? <p className="refusedMessage regRefus">Pasword length must be 6 charachter</p> : ""}
                        </label>

                        <label className="labelForPassvord">
                            <input type={type.repeatPassword} placeholder={t("description.placeholder.repeatePassword")} className={`${repeatPasswordField ? "outLIneError" : ""}`} onFocus={() => setrepeatPasswordField(false)}/>
                            <button onClick={(e) => { 
                                e.preventDefault();
                                setType({ 
                                    ...type,
                                    repeatPassword:type.repeatPassword === "password" ? "text" : "password"
                                })
                            }}>
                                <img src="/mainPageImages/showValue.png" alt="showValueImg"/>
                            </button>
                            {repeatPasswordField ? <p className="refusedMessage regRefus">Repeate password is not match </p> : ""}
                        </label>
                        <button className="RegisterSubmit">Registration</button>
                    </form>
                    
                    <div className={`checkboxForAggrement`}>
                        <input type={`checkbox`} onChange={(e) => {setborderChecked(false);setCheched(e.target.checked)}} className={`${borderChecked ? "borderError" : ""}`}/>
                        <span className={`${borderChecked ? "colorErrorError" : ""}`}>{t("description.agreeCondition.agree")}{" "} 
                            <Link to="/therms" className={`${borderChecked ? "colorErrorError" : ""}`}>
                                {t("description.agreeCondition.terms")} { t("description.agreeCondition.and")} {t("description.agreeCondition.condition")}
                            </Link> { t("description.agreeCondition.and")}
                            <Link  to="/policy" className={`${borderChecked ? "colorErrorError" : ""}`}> {t("description.agreeCondition.police")} </Link>
                        </span>
                    </div>
                    <hr className="registerHr"/>
                </div>
                <p className="SocialNetworkTitle">
                    Registration via social networks
                </p>
                <div className="socialMediaIcon">
                <NavLink to={{pathname:"https://www.facebook.com/webschoolkz/"}} target="_blank">
                        <p style={{background:"#282828"}}>
                            <img src="/mainPageImages/fbIcon.png" alt="fbIcon" />
                        </p>
                </NavLink>
                <NavLink to={{pathname:"https://workspace.google.com/intl/en/products/gmail/?utm_source=google&utm_medium=cpc&utm_campaign=emea-mena-all-en-dr-bkws-all-lv-trial-p-t4-1010042&utm_content=text-ad-none-none-DEV_c-CRE_539821899813-ADGP_Desk%2BTab%20%7C%20BKWS%20-%20PHR%20%7C%20Txt%20~%20Gmail%20~%20General_gmail-KWID_43700065784973172-kwd-318461586-userloc_9070053&utm_term=KW_gmail-ST_gmail&ds_rl=1259922&gclid=Cj0KCQjwqKuKBhCxARIsACf4XuFaUjrkJ8i25-CYMqnfwcbEU4bnrxXaEJO94Goqap4XIphqVf70KpMaAit0EALw_wcB&gclsrc=aw.ds"}} target="_blank">
                    <p style={{background:"#FF1F00"}}>
                        <img src="/mainPageImages/gMailIcon.png" alt="fbIcon" />
                    </p>  
                </NavLink>           
                <NavLink to={{pathname:"https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}} target="_blank">
                    <p style={{background:"#2A29B4"}}>
                        <img src="/mainPageImages/twitterIcon.png" alt="fbIcon" />
                    </p>  
                </NavLink>
                <NavLink to={{pathname:"https://web.telegram.org/k/"}} target="_blank">
                    <p style={{background:"#0085FF"}}>
                        <img src="/mainPageImages/telegramIcon.png" alt="fbIcon" />
                    </p>
                </NavLink>
                </div>
            </div>
            <p className="backgroundBottomDiv"></p>
        </div>
    )
}

export default Register