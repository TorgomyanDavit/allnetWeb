import { useDispatch, useSelector } from "react-redux"
import "./faq.css"
import "./responsive.css"
import { changeFaq } from "../mainPageSlice"



export function Faq({toggle}) {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    console.log(state.faq)
    return (
        <div className="faq">

            <div style={{zIndex:toggle ? "-1" : "inherit"}}><h2>FAQ</h2></div>
            {state.faq.map((val) => {
                return (
                    <div key={Math.random()} className="faqnotifyDiv">                   
                        <p  className="faqP" style={{zIndex:toggle ? "-1" : "inherit"}} onClick={() => {
                            dispatch(changeFaq({id:val.id}))
                        }}>
                            <span>{val.name}</span>
                            <button>{val.simbol}</button>
                        </p>
                        <div className="faqNot" style={{display:val.open ? "block" : "none"}}>
                            <h3 className="faqNotH3">Lorem ipsum dolor sit amet?</h3>
                            <p className="faqNotP">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Id facilisis adipiscing 
                                vitae nisi. Sit phasellus turpis nulla augue 
                                in quisque ultrices venenatis. Eget nunc ornare 
                                sagittis ut. Aenean in at donec etiam. Posuere commodo 
                                pellentesque sapien neque viverra nunc ut. Pellentesque 
                                pulvinar euismod etiam lorem vel. Eget mattis arcu enim
                                odio fringilla amet diam. Lacus, ut luctus ut eget nunc. 
                                Fames fermentum elementum quam vitae tincidunt facilisis 
                                consectetur nisl. Adipiscing nullam dictumst quis donec 
                                iaculis arcu, adipiscing pharetra. A nec arcu pellentesque
                                habitasse aliquet bibendum vestibulum interdum ornare. Ac 
                                iaculis enim, euismod massa, ut ac lorem nisl, sit.
                            </p>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}