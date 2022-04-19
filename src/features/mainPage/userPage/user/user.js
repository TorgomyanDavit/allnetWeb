import { useDispatch, useSelector } from "react-redux"
import person from "../images/edit.svg"
import { changeDisplay,changeDate,setValue,setId,changeUserImg, changeAnimationPathDone, userDate} from "../../mainPageSlice"
import { useEffect, useRef, useState } from "react"
import { changeAnimation } from "../../mainPageSlice"
import { AnimationTimer } from "./animationTimer/animation"
import "./user.css"
import "./responsive.css"
import "./responsiveAnimationUser.css"
import personImg from "../../userPage/images/PersonImg.png"
import { changeUserData } from "../../postRequest"
import Cookies from 'js-cookie';
import { getUserPage } from "../../getRequest"





export default function User() {
    const state = useSelector((state) => state.mainPage)
    const [buttonNAme,setButtonName] = useState(true)
    const [displayAfter,setdisplayAfter] = useState(true)
    let formRef = useRef(null)
    let inpREf = useRef(null)

    


    
    const [ file,setRef ]= useState("")
    const [ fileUrl,setfileUrl ]= useState("")

    // console.log(state.userPage.user,"user");
    // console.log(inpREf);

    useEffect(() => {
        if(state.userPage.user)dispatch(userDate())
    },[state.userPage])

    const dispatch = useDispatch()
    const imageRef = useRef(null)
    const reader = new FileReader()

    useEffect(() => {
        let id = setTimeout(() => setdisplayAfter(false),1100)
        let id2 = setTimeout(() => setButtonName(true),200)
        
        dispatch(changeAnimationPathDone({value:"/userPage/userPerson"}))
        return () => {
            clearTimeout(id)
            clearTimeout(id2)
            dispatch(changeAnimationPathDone({value:"undefined"}))
            dispatch(changeAnimation({value:"/userPage/userPerson"}))
        }
    },[])
    reader.addEventListener("load", (e) => {
        dispatch(changeUserImg({userImg:e.target.result}))
    })
    const {user} = state.userPage 

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
                style = {{
                    background:"white",
                    animationName:
                    state.animationPath === "/userPage/userHome"  ? "personImg" : "null"
                }}>
                <p style={{animationName:state.animationPath === "/userPage/userHome" ? "person" : "null"}}>
                    <img src={state.personImg ? state.personImg : !!user ? user.photo ? `${state.serverForImg}/${user.photo.path}`: personImg : personImg} alt="PersonImg"/>
                </p>
                <label style={{animationName:state.animationPath === "/userPage/userHome" ? "label" : "null"}}
                        className="labelForFileReader" onChange={(e) => {
                        // console.log(e.target.value,e.target.files[0]);
                        setfileUrl(e.target.value)
                        setRef(e.target.files[0])
                        reader.readAsDataURL(e.target.files[0])
                    }}>
                    Uploud image<input accept="image/*" multiple type="file" style={{display:"none"}}/>
                </label>
            </div>
            {/* state.personImg ? state.personImg */}
            <form className="personData"  ref={formRef} onSubmit={(e) => { e.preventDefault() }}>
                {state.personData.map((val,index) => {
                    return (
                        <div key={val.id} className="personName" style={{animationName:state.animationPath === "/userPage/userHome" ? "personName" : "null"}}>
                            {val.dataName} 
                            <input disabled type={val.type} className={`inputInner ${val.id === 2 ? "mailInput" : ""}`} value={val.inner}/> 
                            <img onClick={() => { 
                                if(val.value !== "") {
                                    dispatch(changeDate({id:state.Id}))
                                    dispatch(setValue({id:state.Id,value:""}))
                                }
                                dispatch(changeDisplay({id:val.id})) 
                            }} src={person} alt="logo"
                        />
                            <input placeholder={val.placeholder} name="VARDAN" value={val.value} className="input" style={{display:val.display}} 
                                onChange={(e) => {
                                    dispatch(setId({id:val.id}))
                                    dispatch(setValue({id:val.id,value:e.target.value}))
                                }}
                            />
                        </div>
                    )
                })}




                <div className="ButtonUserData" onClick={(e) => {
                    let body = formRef.current
                    dispatch(changeUserData({
                        path:state.server,
                        token:sessionStorage.getItem("authenticated"),
                        body:{
                            username:body[0].value,
                            email:body[2].value,
                            password:body[4].value,
                            id:user.id,
                        },
                        id:user.id
                    }));
                    dispatch(changeUserImg({userImg:""}))
                }} 
                    style={{
                        animationName:
                        state.animationPath === "/userPage/userHome" ? "buttonPosition" :
                        state.animationPath === "/statisticPortal" ? "buttonPositionforPortal" : "null"
                    }}>{buttonNAme ? "Save" : "Active"}
                </div>
            </form>
        </section>
    )
}




// dispatch(changeUserData({
//     path:state.server,
//     token:sessionStorage.getItem("authenticated"),
//     body:{
//         images:state.personImg,
//         username:body[0].value,
//         email:body[2].value,
//         password:body[4].value,
//         id:user.id,
//     },
//     id:user.id
// }));