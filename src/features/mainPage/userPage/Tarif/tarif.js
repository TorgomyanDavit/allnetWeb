import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showThanks } from "../../mainPageSlice"
import "./tarif.css"
import Thanks from "./thankyouPopUp"


export default function Tarif() {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    let USref = useRef(null)
    return (
        <section className="tarifMain">
            <div className="tarifHeader">
                <p className="trifInnerHeader">Rate</p>
            </div>
            <form className="secondTarifDiv" onSubmit={(event) => {
                let gen = event.target.elements.gen
                if(gen.value === "on") {
                    dispatch(showThanks())
                    window.scrollTo(0, 0)
                    document.body.style.overflow = 'hidden';
                } else {
                    event.preventDefault()
                }
            }}>
                {state.paginationTarif.map((data) => {
                    return (
                        <div className="miniDiv" key={data.id}>
                            <p className="countryname">{data.name}</p>
                            <p className="descriptionTarif">{data.description}</p>
                            {data.tariff_count.map((val) => {
                                return (
                                    <label key={val.id} className="chexbox">
                                        <label className="chexboxinput" required>
                                            <input type="radio" name="gen" style={{display:"none"}}/>   
                                            <div className="check"></div>
                                        </label>
                                        <p className="month">{val.duration_name + " - " + val.currency_code + "" + val.currency_symbol}</p>
                                    </label>
                                )
                            })}
                            <button className="sendTArif" onClick={() => {
                                // dispatch(showThanks())
                            }}>Activate</button>
                        </div>
                    )
                })}
            </form>
        </section>
    )
}