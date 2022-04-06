import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom"
import { forgetemailError } from "../../mainPageSlice"
import { forgetPass } from "../../postRequest"
import "./forget.css"


export function ForgetPassword() {
    const state = useSelector( (state) => state.mainPage )
    const dispatch = useDispatch()
    if(state.forgetemailError) { setTimeout(() => { dispatch( forgetemailError() ) },3000) }
    const [correctEmailMatch,setMatch] = useState(false)
    if(state.sendEmailRedirect) {return <Redirect to="/recLetter"/>}




    return (
        <div className="forget" action="/forgetPassword" method="post" >
            <form className="formForget" onSubmit={(e) => {
                e.preventDefault()
                const input = e.target
                const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!input[0].value.match(mailformat)) {
                    setMatch(true)
                    setTimeout(() => {setMatch(false)},3000)
                } else if(!!input[0].value.match(mailformat)) {
                    console.log("gnac post");
                    dispatch(forgetPass({path:state.server,body:{email:input[0].value}}))
                }
            }}>
                <p className="titleForget">Send Email</p>
                <div className="forLabel">
                    <input  placeholder="Email" name="email" autoComplete="off"
                    onFocus={() => { setMatch(false);dispatch(forgetemailError())}} 
                    className={`inputForget  ${correctEmailMatch ? "outLIneError" : state.forgetemailError ? "outLIneError" : ""}`}
                    />
                    {
                        correctEmailMatch ? <p className="refusedMessage">Fill Correct Email</p> : 
                        state.forgetemailError ? <p className="refusedMessage">Fill Correct Email</p> : ""
                    }
                </div>
                {/* <Link to="/recLetter" className="forgetPassword">Confirm</Link> */}
                <button className="forgetPassword">Confirm</button>
            </form>
        </div>
    )
}