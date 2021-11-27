import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeAnimation } from "../../mainPageSlice"
import "./responsiveFurther.css"



export function StatisticFurther() {

    const dispatch = useDispatch()
    useEffect(() => {return () => dispatch(changeAnimation({value:"/statisticFurther"}))},[])
    
    return (
        <div className="statisticFurther">
            <p><img src="/mainPageImages/dollarIcon.png"/>Top up</p>
            <form className="FurtherForm" onSubmit={(e) => {
                e.preventDefault()
            }}>
                <select placeholder="dsfasdfsadfsdfs">
                    <option hidden>Choose a payment method</option>
                </select>
                <input type="text" placeholder="Deposit amount"/>
                <button>Further</button>
            </form>
        </div>
        
    )
}