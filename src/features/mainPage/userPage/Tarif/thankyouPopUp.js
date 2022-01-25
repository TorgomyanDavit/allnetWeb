

import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { showThanks } from "../../mainPageSlice"
import "./tarif"
export default function Thanks() {
    const dispatch = useDispatch()
    return (
        <section className="mainThanks">
            <div className="thankYou">
                <p className="thumb"></p>
                <p className="textOk">Thank you</p>
                <Link to="/userPage/userHome" className="LinkforThanks" onClick={() => {
                    dispatch(showThanks())
                    document.body.style.overflow = 'unset';
                }}>Back to the main page</Link>
            </div>
        </section>
    )
}