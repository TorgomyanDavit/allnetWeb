import { useState } from "react"
import { Link } from "react-router-dom"
import "./forget.css"
import eyeSlash from "../../../../images/eye-slash.svg"
import eye from "../../../../images/eye.svg"
import { useDispatch, useSelector } from "react-redux"
import { newPass } from "../../postRequest"



export function NewPassword() {
    const state = useSelector( (state) => state.mainPage )
    const [inputType,setInputType] = useState({
        oneinput:"password",
        twoInput:"password"
    })
    const [correctPassword,setMatch] = useState(false)
    const [RepeatePassword,setPassword] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className="forget " action="/forgetPassword" method="post" >
            <form className="formForget newPass" onSubmit={(e) => {
                e.preventDefault()
                const input = e.target
                console.log(e);
                if(input[0].value === "" ) {
                    setMatch("empty")
                    setTimeout(() => {setMatch(false)},3000)
                }  else if(input[0].value.length < 6) {
                    setMatch("length6")
                    setTimeout(() => {setMatch(false)},3000)
                } else if(input[0].value !== input[2].value) {
                    setPassword(true)
                    setTimeout(() => {setPassword(false)},3000)
                } else {
                    dispatch(newPass({
                    path:state.server,
                    body:{
                        password:input[0].value,
                        password_confirmation:input[2].value,
                        token:sessionStorage.getItem("newPasswordToken")}
                    }))
                }
            }}>
                <p className="titleForget">New pasowrd</p>
                <div className="forLabel">
                    <input type={inputType.oneinput} placeholder="Password" name="newPassword"  onFocus={() => {setMatch(false);setPassword(false)}} 
                    className={`inputForget  ${correctPassword ? "outLIneError" : ""}`}/>
                    {
                        correctPassword === "empty" ? <p className="refusedMessage">Fill Password</p> : 
                        correctPassword === "length6" ? <p className="refusedMessage">The password field must be least 6 characters</p> : ""
                    }
                </div>
                <button className="inputForgetnew" 
                    style={{backgroundImage: inputType.oneinput === "password" ? "url(" +  eyeSlash  + ")" : "url(" +  eye  + ")"}} onClick={(e) => {
                        setInputType({
                            ...inputType,
                            oneinput:inputType.oneinput === "password" ?  "text" : "password"
                        })
                }}></button>
                <div className="forLabel">
                    <input type={inputType.twoInput} placeholder="Repeat password" name="repeatPassword" 
                        onFocus={() => {setPassword(false)}} 
                        className={`inputForget  ${RepeatePassword ? "outLIneError" : ""}`}
                    />
                        {RepeatePassword ? <p className="refusedMessage refusedforget2">Please make sure your password match </p> : ""}
                </div>
                <button className="inputForgetnew inputForgetnew2" 
                    style={{backgroundImage: inputType.twoInput === "password" ? "url(" +  eyeSlash  + ")" : "url(" +  eye  + ")"}} 
                    onClick={(e) => {
                        e.preventDefault()
                        setInputType({
                            ...inputType,
                            twoInput:inputType.twoInput === "password" ?  "text" : "password"
                        })
                }}></button>
                <button className="forgetPassword">Confirm</button>
            </form>
        </div>
    )
}