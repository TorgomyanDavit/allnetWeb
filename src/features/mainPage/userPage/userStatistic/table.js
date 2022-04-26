import { useSelector } from "react-redux"
import arrowTop from "../images/arrowTop.png"
import arrowBottom from "../images/arrowBottom.png"
import "./responsiveTable.css"


export function Table() {
    const state = useSelector((state) => state.mainPage)
    const {PageIndex,data} = state.table
    console.log(data);

    return (
    <table className="table">
        <thead>
            <tr className="titleTable">
                <th><select><option hidden>Date</option></select></th>
                <th>Tarif</th>
                <th>balance</th>
                <th>the amount</th>
                <th id="th5">the amount</th>
            </tr>
        </thead>
        <tbody className="tbody">
        { data.length === 0 ? <tr className="stateTable"></tr> :
        data[PageIndex].map((val,index) => {
            return (
                <tr key={Math.random()} className="stateTable">
                    <td>{val.date_start}</td> 
                    <td className="jjj"><p className="pTag" onClick={(e) => {
                        e.target.src = e.target.src === arrowBottom ? arrowTop : arrowBottom
                        }}>{<img src={arrowTop} alt=""/> }</p> <span className="span">{val.tariff_type ? val.tariff_type.name : ""}</span>
                    </td>
                    <td> {val.currency_symbol} {val.amount}</td>
                    <td> {val.currency_symbol} {val.amount}</td>
                    <td> {val.currency_symbol} {val.amount}</td>
                </tr>
            )
        })}
        </tbody>
    </table>
    )
}



