import { useLocation } from "react-router-dom"
import "./about.css"
import "./responsive.css"
import { useDispatch, useSelector } from "react-redux"
import parser from 'html-react-parser';
import { useEffect, useState } from "react";
import { changeloadHeight } from "../mainPageSlice";
import { useTranslation} from "react-i18next"


export function About({toggle}) {
    const state = useSelector((state) => state.mainPage)
    const [t,i18n] = useTranslation()


    return (
        <div className="about" >
            <div className="aboutDiv" style={{zIndex:toggle ? "-1" : "inherit"}}><h2 className="h2">{t("description.header.About")}</h2></div>
            <div className="aboutP" style={{zIndex:toggle ? "-1" : "inherit"}} >{state.mainPAboutPagination.about ? parser(state.mainPAboutPagination.about.content) : ""}</div>
        </div>
    )
}