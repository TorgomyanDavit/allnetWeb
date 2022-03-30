import { useLocation } from "react-router-dom"
import "./about.css"
import "./responsive.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getAboutContent } from "./asyncAbout"
import { useEffect } from "react"
import parser from 'html-react-parser';


export function About({toggle}) {
    const location = useLocation()
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAboutContent())
    },[])


    // console.log(typeof JSON.parse(JSON.stringify(state.mainPAboutPagination.description) ) );

    return (
        <div className="about" >
            <div style={{zIndex:toggle ? "-1" : "inherit"}}><h2>{location.params || "About"}</h2></div>
            {/* <p style={{zIndex:toggle ? "-1" : "inherit"}} >{state.mainPAboutPagination.description}</p> */}
            {/* <p style={{zIndex:toggle ? "-1" : "inherit"}} >{ window.HTMLReactParser(state.mainPAboutPagination.description)}</p> */}
            <p style={{zIndex:toggle ? "-1" : "inherit"}} >{parser(String (state.mainPAboutPagination.descriptio))}</p>
        </div>
    )
}