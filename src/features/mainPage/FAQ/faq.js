import { useDispatch, useSelector } from "react-redux"
import "./faq.css"
import "./responsive.css"
import { changeFaq, changeloadHeight } from "../mainPageSlice"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"



export function Faq({toggle}) {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    const [t,i18n] = useTranslation()




    return (
        <div className="faq">

            <div style={{zIndex:toggle ? "-1" : "inherit"}}><h2>{t("description.header.FAQ")}</h2></div>
            {state.mainFaqPagination.map((val) => {
                return (
                    <div key={Math.random()} className="faqnotifyDiv">                   
                        <p  className="faqP" style={{zIndex:toggle ? "-1" : "inherit"}} onClick={() => {
                            dispatch(changeFaq({id:val.id}))
                        }}>
                            <span>{val.title}</span>
                            <button>{val.simbol}</button>
                        </p>
                        <div className="faqNot" style={{display:val.open ? "block" : "none"}}>
                            <p className="faqNotP">{val.description}</p>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}