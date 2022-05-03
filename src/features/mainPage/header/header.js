import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation} from "react-router-dom"
import "./AresponsiveHeadeer.css"
import "./header.css"
import { Trans , useTranslation} from "react-i18next"
import { changeLanguigArm, changeloadHeight } from "../mainPageSlice"


function Headers({type,Width,setToggle,toggle,MainRef}) {
    const location = useLocation()
    const state = useSelector((state) => state.mainPage)
    const [imgX,setimgX] = useState(false)
    const [select,setSelect] = useState(false)
    const [inner,setInner] = useState("EN")
    let pathName = location.pathname === "/register" || location.pathname === "/signIn" 
    || location.pathname === "/about" || location.pathname === "/contactUs" || location.pathname === "/FAQ" || location.pathname === "/forgetPassword"

    const dispatch = useDispatch()
    const [t,i18n] = useTranslation()
    const changeLanguig = (language) => {
        sessionStorage.setItem("lang",language)
        i18n.changeLanguage(language)
    }

    // console.log(i18n.language);

    useEffect(() => {
        changeLanguig(sessionStorage.getItem("lang"))
    },[])

    



    
    return (
        <header className="headerContainer">
            <nav className="headerNavigator">
                    <NavLink  to={!!sessionStorage.getItem("authenticated") ? "/userPage/userHome" :  "/"} 
                        className={state.animationPath === "/userPage/userHome" && 
                        state.animationPathDone === "/userPage/userPerson" ? "headerImgAnim" 
                        : state.animationPath === "/userPage/userHome" ? "menuLogo" : "menuLogo"} 
                        activeClassName="activeMAinPage"
                    >
                        <img src="/mainPageImages/Logo.svg" alt="Logo" id="menuLogoimg"/>
                    </NavLink>
                <div className="toggleMain" style={{display:toggle ? "block" : "none"}}>
                    <div className="toggle" style={{gap:(!!sessionStorage.getItem("authenticated")) ? "40px" : "11px"}}>
                        <NavLink to="/about" onClick={() => {setToggle(!toggle);setimgX(!imgX)}} className="toggleMenu">{t("description.header.About")}</NavLink>
                        <NavLink to="/contactUs" onClick={() => {setToggle(!toggle);setimgX(!imgX)}} className="toggleMenu">{t("description.header.Contactus")}</NavLink>
                        <NavLink to="/FAQ" onClick={() => {setToggle(!toggle);setimgX(!imgX)}} className="toggleMenu">{t("description.header.FAQ")}</NavLink>
                        <NavLink to="/signIn" onClick={() => {setToggle(!toggle);setimgX(!imgX)}} style={{textDecoration:"none"}} 
                            className={`toggleButton ${!!sessionStorage.getItem("authenticated") ?  "displayNone" : ""}`}> 
                           {t("description.header.signIn")}
                        </NavLink>
                    </div>
                </div>

                <ul className="menuItem" 
                    style={{width:Width,animationName:state.animationPath === "/userPage/userHome" ? "navAnimation" : "null"}}>
                    <NavLink to="/about" className="name">{t("description.header.About")}</NavLink>
                    <NavLink to="/contactUs" className="name">{t("description.header.Contactus")}</NavLink>
                    <NavLink to="/FAQ" className="name">{t("description.header.FAQ")}</NavLink>
                    <NavLink to="/signIn" style={{textDecoration:"none",display:!!sessionStorage.getItem("authenticated") ? "none" : pathName ? "none" : "flex"}}> 
                        <button className="menuItemButton">{t("description.header.signIn")}</button>
                    </NavLink>
                    <div className="languig-Div" onClick={() => setSelect(!select)}>{inner.toUpperCase()} 
                        <ul className="option" style={{display:select  ? "flex" : "none"}}>
                            {state.innerSelect.map((val) => {
                                return <button key={Math.random()} onClick={(e) => {
                                    setSelect(!select)
                                    setInner(val)
                                    changeLanguig(val)
                                    dispatch(changeLanguigArm({
                                        leng:val,
                                        armLeng:["Անուն","Էլ․հասցե","Գաղտնաբառ"],
                                        engLeng:["username","email","Password"],
                                        armPlaceholder:["փոխել Անունը","փոխել Էլ․հասցեն","փոխել Գաղտնաբառը"],
                                        engPlaceholder:["changeName","changeMail","changePassword"]
                                    }))
                                }}>{val}</button>
                            })}
                        </ul>
                    </div>
                </ul>
                
                <button className={state.regAndsignNone ? "toggleImg" : "toggleNone"} onClick={() => {
                        setToggle(!toggle)
                        setimgX(!imgX)
                    }}>
                    {imgX ? <img src="/mainPageImages/Ximg.png" alt="MenuIcon"/> : 
                        state.imgType ? <img src="/mainPageImages/menuImg.png" alt="MenuIcon"/> :
                        <img src="/mainPageImages/toggleImgForanotherPage.png" alt="MenuIcon"/> 
                    }
                </button>
            </nav>
        </header>
    )
}
export {Headers}

// ,display:type