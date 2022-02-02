import { useState } from "react"
import { Link } from "react-router-dom"
import "./forget.css"
import eyeSlash from "../../../../images/eye-slash.svg"
import eye from "../../../../images/eye.svg"



export function NewPassword() {
    const [inputType,setInputType] = useState({
        oneinput:"password",
        twoInput:"password"
    })

    return (
        <div className="forget " action="/forgetPassword" method="post" >
            <form className="formForget newPass" onSubmit={(e) => {
                e.preventDefault()
            }}>
            <p className="titleForget">New pasowrd</p>
            <input type={inputType.oneinput} className="inputForget" placeholder="Password" name="newPassword" />
            <button className="inputForgetnew" 
                style={{backgroundImage: inputType.oneinput === "password" ? "url(" +  eyeSlash  + ")" : "url(" +  eye  + ")"}} onClick={(e) => {
                    setInputType({
                        ...inputType,
                        oneinput:inputType.oneinput === "password" ?  "text" : "password"
                    })
            }}></button>
            <input type={inputType.twoInput} className="inputForget" placeholder="Repeat password" name="repeatPassword"/>
            <button className="inputForgetnew inputForgetnew2" 
                style={{backgroundImage: inputType.twoInput === "password" ? "url(" +  eyeSlash  + ")" : "url(" +  eye  + ")"}} 
                onClick={() => {
                    setInputType({
                        ...inputType,
                        twoInput:inputType.twoInput === "password" ?  "text" : "password"
                    })
            }}></button>
            <Link to="/signIn" className="forgetPassword">Confirm</Link>
            </form>
        </div>
    )
}