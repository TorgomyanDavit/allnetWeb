import { useLocation } from "react-router-dom"
import "./about.css"
import "./responsive.css"
import { useSelector } from "react-redux"
import parser from 'html-react-parser';


export function About({toggle}) {
    const location = useLocation()
    const state = useSelector((state) => state.mainPage)
    return (
        <div className="about" >
            <div className="aboutDiv" style={{zIndex:toggle ? "-1" : "inherit"}}><h2>{location.params || "About"}</h2></div>
            <div className="aboutP" style={{zIndex:toggle ? "-1" : "inherit"}} >{parser(state.mainPAboutPagination.description)}</div>
        </div>
    )
}