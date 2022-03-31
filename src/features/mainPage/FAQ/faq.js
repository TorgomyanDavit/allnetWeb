import { useDispatch, useSelector } from "react-redux"
import "./faq.css"
import "./responsive.css"
import { changeFaq } from "../mainPageSlice"



export function Faq({toggle}) {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    return (
        <div className="faq">

            <div style={{zIndex:toggle ? "-1" : "inherit"}}><h2>FAQ</h2></div>
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
                            <h3 className="faqNotH3">Lorem ipsum dolor sit amet?</h3>
                            <p className="faqNotP">{val.description}</p>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}