import { useLocation } from "react-router-dom"
import "./about.css"
import "./responsive.css"
import { useSelector } from "react-redux"
import parser from 'html-react-parser';
import { useEffect, useState } from "react";


export function Therms({toggle}) {
    const state = useSelector((state) => state.mainPage)

    return (
        <div className="about" >
            <div className="aboutDiv" style={{zIndex:toggle ? "-1" : "inherit"}}><h2 className="h2">therms</h2></div>
            <div className="aboutP" style={{zIndex:toggle ? "-1" : "inherit"}} >{state.mainPAboutPagination.therms ?  parser(state.mainPAboutPagination.therms.content) : ""}</div>
        </div>
    )
}