import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { forgetemailError } from "../../mainPageSlice"
import "./forget.css"


export function ForgetPassword() {
    const state = useSelector( (state) => state.mainPage )
    const dispatch = useDispatch()
    if(state.forgetemailError) { setTimeout(() => { dispatch( forgetemailError() ) },3000) }
    const [correctEmailMatch,setMatch] = useState(false)





    return (
        <div className="forget" action="/forgetPassword" method="post" >
            <form className="formForget" onSubmit={(e) => {
                e.preventDefault()
                const input = e.target
                const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!!input[0].value.match(mailformat)) {

                }
            }}>
                <p className="titleForget">forgot password?</p>
                <label>
                    <input  placeholder="email" name="email" autoComplete="off"
                    onFocus={() => { setMatch(false);dispatch(forgetemailError())}} 
                    className={`inputForget  ${correctEmailMatch ? "outLIneError" : state.forgetemailError ? "outLIneError" : ""}`}
                    />
                    {
                        correctEmailMatch ? <p className="refusedMessage">Fill Correct Email</p> : 
                        state.forgetemailError ? <p className="refusedMessage">Fill Correct Email</p> : ""
                    }

                </label>
                {/* <Link to="/recLetter" className="forgetPassword">Confirm</Link> */}
                <button className="forgetPassword">Confirm</button>
            </form>
        </div>
    )
}