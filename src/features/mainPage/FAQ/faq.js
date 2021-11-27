import { useSelector } from "react-redux"
import "./faq.css"
import "./responsive.css"


export function Faq({toggle}) {
    const state = useSelector((state) => state.mainPage)
    return (
        <div className="faq"  >
            <div style={{zIndex:toggle ? "-1" : "inherit"}}><h2>FAQ</h2></div>
            {state.faq.map((val) => {
                return (
                    <p key={Math.random()} className="faqP" style={{zIndex:toggle ? "-1" : "inherit"}}>
                        <span>{val.name}</span>
                        <button>{val.simbol}</button>
                    </p>
                )
            })}
        </div>
    )
}