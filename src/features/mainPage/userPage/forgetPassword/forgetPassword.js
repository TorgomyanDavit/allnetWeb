import { Link } from "react-router-dom"
import "./forget.css"


export function ForgetPassword() {
    return (
        <div className="forget" action="/forgetPassword" method="post" >
            <form className="formForget" onSubmit={(e) => {
                e.preventDefault()
            }}>
            <p className="titleForget">forgot password?</p>
            <input type="email" className="inputForget" placeholder="email" name="email" autoComplete="off" required/>
            <Link to="/recLetter" className="forgetPassword">Confirm</Link>
            {/* <button className="forgetPassword">Confirm</button> */}
            </form>
        </div>
    )
}