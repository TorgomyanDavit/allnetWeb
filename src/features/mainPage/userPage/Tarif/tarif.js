import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTarifId, showThanks } from "../../mainPageSlice"
import "./tarif.css"
import Thanks from "./thankyouPopUp"


export default function Tarif() {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    let USref = useRef(null)


    function setTarifData(event,index) {
        let gen = event.target.form.elements.gen
        if(gen.value === "on") {
            let genID = Object.keys(gen).filter((val,index) => {
                return gen[index].checked
            }).map((val) => {if( +val % 2 === 0 ) { return 0 } else { return 1 }} )
            dispatch(setTarifId({tarifTypeID:index,radioId:genID[0]}))
            dispatch(showThanks())
            window.scrollTo(0,0)
            document.body.style.overflow = 'hidden';
        } 
    }

    console.log(state.checkTarifData);






    return (
        <section className="tarifMain">
            <div className="tarifHeader">
                <p className="trifInnerHeader">Rate</p>
            </div>
            <form className="secondTarifDiv" onSubmit={(event) => {
                event.preventDefault()
            }}>
                {state.paymentPage.map((data,index) => {
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
                                        <p className="month">{val.duration_name + " - " + val.cost + ""+ val.currency_symbol}</p>
                                    </label>
                                )
                            })}
                            <button className="sendTArif" onClick={(event) => {
                                setTarifData(event,index)
                            }}>Activate</button>
                        </div>
                    )
                })}
            </form>
        </section>
    )
}