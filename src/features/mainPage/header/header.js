import { useState } from "react"
import { useSelector } from "react-redux"
import { NavLink} from "react-router-dom"
import "./AresponsiveHeadeer.css"
import "./header.css"

function Headers({type,Width,setToggle,toggle}) {
    const state = useSelector((state) => state.mainPage)
    const [imgX,setimgX] = useState(false)
    const [select,setSelect] = useState(false)
    const [inner,setInner] = useState("EN")


    return (
        <header className="headerContainer">
            <nav className="headerNavigator">
                    <NavLink  to="/" 
                        className={state.animationPath === "/userPage/userHome" && 
                        state.animationPathDone === "/userPerson" ? "headerImgAnim" 
                        : state.animationPath === "/userPage/userHome" ? "menuLogo" : "menuLogo"} 
                        activeClassName="activeMAinPage"
                    >
                        <img src="/mainPageImages/Logo.svg" alt="Logo" id="menuLogoimg"/>
                    </NavLink>
                <div className="toggleMain" style={{display:toggle ? "block" : "none"}}>
                    <div className="toggle">
                        <NavLink to="/about" onClick={() => {setToggle(!toggle);setimgX(!imgX)}} className="toggleMenu">About</NavLink>
                        <NavLink to="/contactUs" onClick={() => {setToggle(!toggle);setimgX(!imgX)}} className="toggleMenu">Contact us</NavLink>
                        <NavLink to="/FAQ" onClick={() => {setToggle(!toggle);setimgX(!imgX)}} className="toggleMenu">FAQ</NavLink>
                        <NavLink to="/signIn" onClick={() => {setToggle(!toggle);setimgX(!imgX)}} style={{textDecoration:"none", display:type}} className="toggleButton"> 
                            Sign in
                        </NavLink>
                    </div>
                </div>

                <ul className="menuItem" 
                    style={{width:Width,animationName:state.animationPath === "/userPage/userHome" ? "navAnimation" : "null"}}>
                    <NavLink to="/about" className="name">About</NavLink>
                    <NavLink to="/contactUs" className="name">Contact us</NavLink>
                    <NavLink to="/FAQ" className="name">FAQ</NavLink>
                    <NavLink to="/signIn" style={{textDecoration:"none", display:type}}> 
                        <button className="menuItemButton">Sign in</button>
                    </NavLink>
                    <div className="languig-Div" onClick={() => setSelect(!select)}>{inner} 
                        <ul className="option" style={{display:select  ? "block" : "none"}}>
                            {state.innerSelect.map((val) => {
                            return <li key={Math.random()} onClick={(e) => {
                                    setSelect(!select)
                                    setInner(val)
                                    }}>{val}</li>
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