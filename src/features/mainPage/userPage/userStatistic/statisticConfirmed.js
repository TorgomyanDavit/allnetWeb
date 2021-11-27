import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeAnimation } from "../../mainPageSlice"
import "./responsiveConfirmed.css"



export function StatisticConfirmed() {

    const dispatch = useDispatch()
    useEffect(() => {return () => dispatch(changeAnimation({value:"/statisticConfirmed"}))},[])
    return (
        <div className="statisticConfirmed">
            <p><img src="/mainPageImages/repeatIcon.png"/> Internal translation</p>
            <form className="confirmedForm" onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input type="text" placeholder="Recipient's email address"/>
                <input type="text" placeholder="Deposit amount"/>
                <select>
                    <option hidden>Confirmation method*</option>
                </select>
                <button>Further</button>
            </form>
        </div>
    )
}