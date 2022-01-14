import { useDispatch, useSelector } from "react-redux"
import { showThanks } from "../../mainPageSlice"
import "./tarif.css"
import Thanks from "./thankyouPopUp"

export default function Tarif() {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    return (
        <section className="tarifMain">
            <div className="tarifHeader">
                <p className="trifInnerHeader">Rate</p>
            </div>
            <form className="secondTarifDiv" onSubmit={(e) => {
                e.preventDefault()
            }}>
                {state.Tarif.map((val) => {
                    return (
                        <div className="miniDiv" key={val.id}>
                            <p className="countryname">{val.country}</p>
                            <p className="descriptionTarif">
                                Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500.
                            </p>
                            <label className="chexbox">
                                <label className="chexboxinput">
                                    <input type="radio" name="gen" style={{display:"none"}}/>   
                                    <div className="check"></div>
                                </label>
                                <p className="month">{val.month}</p>
                            </label>

                            <label className="chexbox">
                                <label className="chexboxinput">
                                    <input type="radio" name="gen" style={{display:"none"}} />
                                    <div className="check"></div>
                                </label>
                                <p className="month">{val.year}</p>
                            </label>

                            <button className="sendTArif" onClick={() => {
                                dispatch(showThanks())
                            }}>Activate</button>
                        </div>
                    )
                })}
            </form>
        </section>
    )
}