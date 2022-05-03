import { NavLink } from "react-router-dom"
import "./signIn.css"
import { useEffect, useState } from "react";
import "./responsive.css"
import { changeRegAndSignImgdisplay, loginAuth } from "../mainPageSlice";
import { useDispatch, useSelector } from "react-redux";
import { postSignIn } from "../postRequest";
import { Redirect } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next"




function SignIn({toggle}) {
    const [t,i18n] = useTranslation()
    let [type,setType] = useState("password")
    const dispatch = useDispatch()
    const [passwordMatch,setMatch] = useState(false)
    const state = useSelector( (state) => state.mainPage )

    if(state.loginemailValidation) {setTimeout(() => { dispatch( loginAuth() ) },3000)}
    let Authenticated = sessionStorage.getItem("authenticated");
    if(Authenticated) {return <Redirect to="/userPage/userHome"/>}

    return (
        <div className="mainSignIn" style={{zIndex:toggle ? "-1" : "inherit"}}>
            <div className="signInImgDiv">
                <img src="/mainPageImages/signInImg.png" alt="registerImg"/>
                <img src="/mainPageImages/signInElipsImg.png" alt="signInElipseImg" className="signInElipsImg"/>
            </div>
            <div className="loginSignInDiv">
                <div className="signInButtonDiv">
                    <NavLink to="/register" className="registerButton" activeClassName="activeRegisterButton">
                    {t("description.home.register")}
                    <p className="registerButtonUnderLine"></p>
                    </NavLink>
                    <NavLink to="/signIn" className="SignInButton" activeClassName="activeSignInButton">
                    {t("description.home.signIn")}
                    <p className="signInButtonUnderLine"></p>
                    </NavLink>
                </div>
                <form className="inputSignDiv" onSubmit={(e) => {
                        e.preventDefault()
                        const input = e.target
                        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if(!!(input[0].value.match(mailformat)) && input[1].value.length > 5)  {
                            dispatch(postSignIn({path:state.server,body:{email:input[0].value,password:input[1].value}}));
                        } else if( !input[0].value.match(mailformat) ) {
                            setMatch("emailnotDefined")
                            setTimeout(() => {setMatch(false)},3000)
                        } else if( input[1].value.length < 6 && input[1].value !== "" ) {
                            setMatch("passwordError")
                            setTimeout(() => {setMatch(false)},3000)
                        } else if( input[1].value === "" ) {
                            setMatch("emptyPassword")
                            setTimeout(() => {setMatch(false)},3000)
                        } 
                    }}>
                    <div className="formSignIn">
                        <label>
                            <input type="text" placeholder={t("description.placeholder.email")} onFocus={() => { setMatch(false);dispatch(loginAuth())}} className={
                                passwordMatch === "emailnotDefined" ?  "outLIneError" :
                                passwordMatch === "passwordError" ?  "outLIneError" :
                                state.loginemailValidation ? "outLIneError" : ""
                            }/>
                            {passwordMatch === "emailnotDefined" ? <p className="refusedMessage">email is not defined</p> : ""}
                        </label>
                        <label className="labelForSignInPassvord">
                            <input type={type} placeholder={t("description.placeholder.password")} onFocus={() => { setMatch(false);dispatch(loginAuth())}} className={
                                passwordMatch === "emptyPassword" ?  "outLIneError" :
                                passwordMatch === "passwordError" ?  "outLIneError" :
                                state.loginemailValidation ? "outLIneError" : ""
                            }/>
                            <button onClick={(e) => {e.preventDefault(); setType(type === "password" ? "text" : "password")}}>
                                <img src="/mainPageImages/showValue.png" alt="showValueImg"/>
                            </button>
                            { 
                                passwordMatch === "emptyPassword" ? <p className="refusedMessage">Fill Password</p> : 
                                passwordMatch === "passwordError" ? <p className="refusedMessage">User does not exist</p> : 
                                state.loginemailValidation ? <p className="refusedMessage">User does not exist</p> : ""
                            }
                        </label>
                       
                    </div>
                    <p className="rememberPassword">
                        <NavLink to="/forgetPassword" className="rememberPasswordLink">
                            {t("description.forgetPassword")}
                        </NavLink>
                    </p>
                    <button className="signInSubmit">{t("description.home.signIn")}</button>
                    <hr className="signInunderLine"/>
                </form>
                <p className="SignInSocialNetworkTitle">Registration via social networks</p>
                <div className="signInSocialMediaIcon">
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
            <p className="backgroundSignInBottomDiv"></p>
        </div>
    )
}

export default SignIn