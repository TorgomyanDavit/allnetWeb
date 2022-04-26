import { useDispatch, useSelector } from "react-redux"
import "./messigePerson.css"
import { changeAnimation, delsetMessige } from "../../mainPageSlice"
import { useEffect } from "react"
import "./responsiveMessige.css"
import bell from "../images/bell.svg"
import { deleteMessagePost } from "../../postRequest"


export function MessigePerson() {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    useEffect(() => {return () => dispatch(changeAnimation({value:"/userPage/messigePerson"}))},[])
    console.log(new Date("2022-04-25 09:08:29").toISOString().split('T')[0]);
    


    return (
        <section className="messigePerson">
            {
            state.messigePerson.map((val) => {
                return (
                    <div key={Math.random()} className="personDiv">
                        <p><img src={bell} alt=""/></p>
                        <div className="personDescription">
                            <a href="#">{val.title}</a>
                            <p>{val.description}</p>
                            <span>{ new Date(val.created_at).toISOString().split('T')[0] }</span>
                        </div>
                        <span className="personTiem">{new Date(val.created_at).toLocaleTimeString('de-DE', {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}</span>
                        <button className="deleteIconMessige" onClick={() => {
                            dispatch(deleteMessagePost({
                                path:state.server,
                                token:sessionStorage.getItem("authenticated"),
                                id:val.id
                            }))
                            dispatch(delsetMessige({id:val.id}))
                        }}></button>
                    </div>
                )
            })}
            
        </section>
    )
}