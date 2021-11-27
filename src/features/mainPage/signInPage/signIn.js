import { NavLink } from "react-router-dom"
import "./signIn.css"
import { useEffect, useState } from "react";
import "./responsive.css"
import { changeRegAndSignImgdisplay } from "../mainPageSlice";
import { useDispatch } from "react-redux";



function SignIn({toggle}) {
    let [type,setType] = useState("password")
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(changeRegAndSignImgdisplay())

    //     return () => {
    //         dispatch(changeRegAndSignImgdisplay())
    //     }
    // },[])
    return (
        <div className="mainSignIn" style={{zIndex:toggle ? "-1" : "inherit"}}>
            <div className="signInImgDiv">
                <img src="/mainPageImages/signInImg.png" alt="registerImg"/>
                <img src="/mainPageImages/signInElipsImg.png" alt="signInElipseImg" className="signInElipsImg"/>
            </div>
            <div className="loginSignInDiv">
                <div className="signInButtonDiv">
                    <NavLink to="/register" className="registerButton" activeClassName="activeRegisterButton">
                        Registration
                        <p className="registerButtonUnderLine"></p>
                    </NavLink>
                    <NavLink to="/signIn" className="SignInButton" activeClassName="activeSignInButton">
                        Sign in
                        <p className="signInButtonUnderLine"></p>
                    </NavLink>
                </div>
                <div className="inputSignDiv">
                    <form className="formSignIn">
                        <input type="text" placeholder="Login"/>
                        <label className="labelForSignInPassvord">
                            <input type={type} placeholder="Password"/>
                            <button onClick={(e) => {
                                e.preventDefault()
                                setType(type === "password" ? "text" : "password")
                            }}>
                                <img src="/mainPageImages/showValue.png" alt="showValueImg"/>
                            </button>
                        </label>
                    </form>
                    <p className="rememberPassword">
                        <NavLink to="#" className="rememberPasswordLink">
                            Forgot your password ?
                        </NavLink>
                    </p>
                    <NavLink to="/userPage/userHome" className="signInSubmit">Sign In</NavLink>
                    <hr className="signInunderLine"/>
                </div>
                <p className="SignInSocialNetworkTitle">
                    Registration via social networks
                </p>
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