import { useDispatch, useSelector } from "react-redux"
import "./messigePerson.css"
import { changeAnimation } from "../../mainPageSlice"
import { useEffect } from "react"
import "./responsiveMessige.css"



export function MessigePerson() {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    useEffect(() => {return () => dispatch(changeAnimation({value:"/messigePerson"}))},[])
    
    return (
        <section className="messigePerson">
            {state.messigePerson.map((val) => {
                return (
                    <div key={Math.random()} className="personDiv">
                        <p><img src={val.img} alt=""/></p>
                        <div className="personDescription">
                            <a href="#">{val.name}</a>
                            <p>{val.description}</p>
                            <span>{val.date}</span>
                        </div>
                        <span className="personTiem">9.00</span>
                    </div>
                )
            })}
            
        </section>
    )
}