import { useDispatch, useSelector } from "react-redux"
import person from "../images/edit.svg"
import { changeDisplay,changeDate,setValue,setId,changeUserImg, changeAnimationPathDone} from "../../mainPageSlice"
import { useEffect, useRef, useState } from "react"
import { changeAnimation } from "../../mainPageSlice"
import { AnimationTimer } from "./animationTimer/animation"
import "./user.css"
import "./responsive.css"
import "./responsiveAnimationUser.css"






export default function User() {
    const state = useSelector((state) => state.mainPage)
    const [buttonNAme,setButtonName] = useState(true)
    const [displayAfter,setdisplayAfter] = useState(true)

    const dispatch = useDispatch()
    const imageRef = useRef(null)
    const reader = new FileReader()

    useEffect(() => {
        let id = setTimeout(() => setdisplayAfter(false),1100)
        let id2 = setTimeout(() => setButtonName(true),200)
        
        dispatch(changeAnimationPathDone({value:"/userPerson"}))
        return () => {
            clearTimeout(id)
            clearTimeout(id2)
            dispatch(changeAnimationPathDone({value:"undefined"}))
            dispatch(changeAnimation({value:"/userPerson"}))
        }
    },[])
    
    

    reader.addEventListener("load", (e) => {
        dispatch(changeUserImg({userImg:e.target.result}))
    })
    return (
        <section className="PersonUser">
            {displayAfter ? <span className="afterBalanc" 
                style={{animationName:state.animationPath === "/userPage/userHome" ? "afterBalanc" : "null"
            }}>Balance : 100$</span> : null}

            {displayAfter ?  <span className="after" 
                style={{animationName:state.animationPath === "/userPage/userHome" ? "after" : "null "
            }}>Raya Galstyan</span>  : null}

            {displayAfter  ? <span className="afterName" 
                style={{animationName:state.animationPath === "/userPage/userHome" ? "afterName" : "null"
            }}><img src="/mainPageImages/buttonSlack.png" alt=""/></span> : null} 
            <AnimationTimer style={{opacity:1}}/>
            <div className="UserPersonImg"
                style=
                {{
                    background:"white",
                    animationName:
                    state.animationPath === "/userPage/userHome"  ? "personImg" : "null"
                }}>
                    <p style={{animationName:state.animationPath === "/userPage/userHome" ? "person" : "null"}}>
                        <img ref={imageRef} src={state.personImg} alt="PersonImg"/>
                    </p>
                    <label style={{animationName:state.animationPath === "/userPage/userHome" ? "label" : "null"}}
                            className="labelForFileReader" onChange={(e) => {
                            reader.readAsDataURL(e.target.files[0])
                        }}>
                        Uploud image<input type="file" style={{display:"none"}}/>
                    </label>
            </div>

            <form className="personData" onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(changeDate({id:state.Id}))
                    dispatch(setValue({id:state.Id,value:""}))
                    dispatch(changeDisplay({id:state.id}))
                }}>
                {state.personData.map((val,index) => {
                    return (
                        <div key={val.id} className="personName" style={{animationName:state.animationPath === "/userPage/userHome" ? "personName" : "null"}}>
                            {val.dataName} 
                            {
                                index === 1 ? <a href={"mailTo:"+val.inner+""}>{val.inner}</a> 
                                : <input disabled type={val.type} className="inputInner" value={val.inner}/> 
                            } 
                            <img onClick={() => { dispatch(changeDisplay({id:val.id})) }} src={person} alt=""
                        />
                            <input placeholder={val.placeholder}  value={val.value} className="input" style={{display:val.display}} 
                                onChange={(e) => {
                                    dispatch(setId({id:val.id}))
                                    dispatch(setValue({id:val.id,value:e.target.value}))
                                }}
                            />
                        </div>
                    )
                })}
                <button className="ButtonUserData"
                style=
                {{
                    animationName:
                    state.animationPath === "/userPage/userHome" ? "buttonPosition" :
                    state.animationPath === "/statisticPortal" ? "buttonPositionforPortal" : "null"
                }}>{buttonNAme ? "Save" : "Active"}</button>
            </form>
        </section>
    )
}


