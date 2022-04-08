import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { sendLetterMail } from "../../mainPageSlice";
import "./forget.css"

export function ReceiveLetter() {
    const dispatch = useDispatch()
    const state = useSelector( (state) => state.mainPage )
    useEffect(() => {dispatch(sendLetterMail())},[])

    return (
        <div className="forget">
            <div className="receiveLet">
                <Link to={(location) => "/"} className="backtoRegister"/>
                <p className="Letter"></p>
                <p className="textGood">The letter has been sent to your E-mail</p>
            </div>
        </div>
    )
}