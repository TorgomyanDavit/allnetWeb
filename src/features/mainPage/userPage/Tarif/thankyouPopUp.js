

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getUserPage } from "../../getRequest"
import { ShowOkeyByTarif, showThanks } from "../../mainPageSlice"
import "./tarif"




export default function Thanks() {
    const state = useSelector((state) => state.mainPage)

    const dispatch = useDispatch()
    return (
        <section className="mainThanks">
            <div className="thankYou">
                <p className="thumb"></p>
                <p className="textOk">Thank you</p>
                <Link to="/userPage/userHome" className="LinkforThanks" onClick={() => {
                    dispatch(getUserPage({path:state.server,token:sessionStorage.getItem("authenticated")}))
                    dispatch(ShowOkeyByTarif())
                    document.body.style.overflow = 'unset';
                }}>Back to the main page</Link>
            </div>
        </section>
    )
}