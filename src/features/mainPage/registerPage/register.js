import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { changeRegAndSignImgdisplay } from "../mainPageSlice"
import "./register.css"
import "./responsive.css"


function Register({toggle}) {
    let [type,setType] = useState({
        password:"password",
        repeatPassword:"password"
    })
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(changeRegAndSignImgdisplay())

    //     return () => {
    //         dispatch(changeRegAndSignImgdisplay())
    //     }
    // },[])
    
    return (
        <div className="registerMAin" style={{zIndex:toggle ? "-1" : "inherit"}}>
            <div className="registerImgDiv">
                <img src="/mainPageImages/registerImg.png" alt="registerImg"/>
            </div>
            <div className="loginDiv">
                <div className="RegisterButtonDiv">
                    <NavLink to="/register" className="registerButton" activeClassName="activeRegisterButton">
                        Registration
                        <p className="registerButtonUnderLine"></p>
                    </NavLink>
                    <NavLink to="/signIn" className="registerButton" activeClassName="activeSignInButton">
                        Sign in
                        <p className="signInButtonUnderLine"></p>
                    </NavLink>
                </div>
                <div className="inputDiv">
                    <form className="formRegistration" onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <input type="text" placeholder="Login"/>
                        <input type="email" placeholder="E-mail"/>
                        <label className="labelForPassvord">
                            <input type={type.password} placeholder="Password"/>
                            <button onClick={(e) => { 
                                e.preventDefault();
                                setType({ 
                                    ...type,
                                    password:type.password === "password" ? "text" : "password"
                                })
                            }}>
                                <img src="/mainPageImages/showValue.png" alt="showValueImg"/>
                            </button>
                        </label>
                        <label className="labelForPassvord">
                            <input type={type.repeatPassword} placeholder="Repeate password"/>
                            <button onClick={(e) => { 
                                e.preventDefault();
                                setType({ 
                                    ...type,
                                    repeatPassword:type.repeatPassword === "password" ? "text" : "password"
                                })
                            }}>
                                <img src="/mainPageImages/showValue.png" alt="showValueImg"/>
                            </button>
                        </label>
                        <NavLink to="/userPage/userHome" className="RegisterSubmit">Registration</NavLink>
                    </form>
                    <div className="checkboxForAggrement">
                        <input type="checkbox"/>
                        <span> I agree to the {" "} 
                            <Link to={{pathname:"/about",params:"Terms & Conditions"}}>terms {"&"} conditions</Link> or 
                            <Link to={{pathname:"/about",params:"Privacy Police"}}> Privacy police </Link>
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