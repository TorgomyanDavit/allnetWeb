import { useSelector } from "react-redux"
import arrowTop from "../images/arrowTop.png"
import arrowBottom from "../images/arrowBottom.png"
import "./responsiveTable.css"


export function Table() {
    const state = useSelector((state) => state.mainPage)
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
        {state.table.map((val) => {
            return (
            <tr key={Math.random()} className="stateTable">
                <td>{val.date}</td>
                <td className="jjj"><p className="pTag" onClick={(e) => {
                    e.target.src = e.target.src === arrowBottom ? arrowTop : arrowBottom
                    }}>{<img src={arrowTop} alt=""/> }</p> <span className="span">{val.purpose}</span>
                </td>
                <td> {"$"} {val.balance}</td>
                <td> {"$"} {val.theAmount}</td>
                <td> {"$"} {val.remains}</td>
            </tr>
            )
        })}
        </tbody>
    </table>
    )
}