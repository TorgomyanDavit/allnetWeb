import { Link } from "react-router-dom"
import "./forget.css"

export function ReceiveLetter() {
    return (
        <div className="forget">
            <div className="receiveLet">
                <Link to="/newPassword" className="backtoRegister"/>
                <p className="Letter"></p>
                <p className="textGood">The letter has been sent to your E-mail</p>
            </div>
        </div>
    )
}