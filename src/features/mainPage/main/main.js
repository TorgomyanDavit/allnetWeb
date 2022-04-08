import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { changeImgType, loading } from "../mainPageSlice"
import "./main.css"
import "./responsiveMain.css"


function Main({changeType,toggle}) {
    const [playImg,setPlayImg] = useState(false)
    const [width,setWidth] = useState(false)
    const dispatch = useDispatch()
    const state = useSelector((state) => state.mainPage)
    useEffect(() => {
        dispatch(changeImgType({type:true}))
        if(window.screen.width=== 375) {
            setWidth(!width)
        }
        changeType("block","630px")
        return () => {
            dispatch(changeImgType({type:false}))
            changeType("none","386px")
        }
    },[]);

    return <>
        <main className="main" style={{zIndex:toggle ? "-1" : "inherit"}}>
            <div className="mainImgDiv" style={{transform: playImg === true ? "translateY(-10px)" : "translateY(0px)"}}>
                { 
                    width ? <img src="/mainPageImages/imgResponsive.png" alt="mainImg"/>
                    :<img src="/mainPageImages/mainPageImg.png" alt="mainImg"/>
                }
            </div>
            <div className="registerDiv">
                <h2>{state.mainPagePagination.title}</h2>
                <p className="descriptionTitle">{state.mainPagePagination.description}</p>
                <div className="registerButtonDiv">
                <NavLink to="/signIn" className="Navlink" activeClassName="activeNavlink">
                    Sign In
                </NavLink>
                <NavLink to="/register" className="Navlink" activeClassName="activeNavlink" 
                onMouseOver={() => {
                    setPlayImg(!playImg)
                }} onMouseLeave={() =>  {
                    setPlayImg(!playImg)
                }}>
                    Registration
                </NavLink>
                </div>
                <div className="groupImg">
                    <img src="/mainPageImages/smartTv.png" alt="smartTvimg"/>
                    <img src="/mainPageImages/iosImg.png" alt="iosImg"/>
                    <img src="/mainPageImages/androidImg.png" alt="androidImg"/>
                </div>
            </div>
            <div className="underLine"></div>
            <div className="TvchannelDiv">
                {state.MainPageTvChanne.map((val,index) => {
                    return <img src={val} alt="" key={Math.random()}/>
                })}
            </div>
        </main> 
    </>
}
export default Main