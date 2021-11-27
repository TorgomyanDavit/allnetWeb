import { useDispatch, useSelector } from "react-redux"
import "./userPlayChannel.css"
import "./responsivePlayChannel.css"
import imgCheckbox from "../images/chect.png"
import { Link } from "react-router-dom"
import { SecondChannelsDiv } from "./seconDivChannes"
import { changeAnimation } from "../../mainPageSlice"
import { useEffect } from "react"
import "./animationResponsive.css"





export function UserPlayChannel() {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    useEffect(() => {return () => dispatch(changeAnimation({value:"/userChannel"}))},[])

    return (
        <section className="userPlayChannel">
            <div className="firstThreepageDiv">
                <div className="firstThreepageDivheader"
                    style={{animationName:state.animationPath === "/userStatistic/table1" ? "firstThreepageDivheader" : "null"}}
                >
                    <p 
                        style={{animationName:state.animationPath === "/userStatistic/table1" ? "contentDiv" : "null"}}
                    >Access key</p>
                    <div className="firstChild"
                        style={{animationName:state.animationPath === "/userStatistic/table1" ? "contentDiv" : "null"}}
                    >
                        <p>FZG2ZNLKYY4VXW</p>
                        <button>Change</button>
                    </div>
                </div>
                <div className="channelInputDivTitle">
                    <h2 id="h2Title" 
                        style={{animationName:state.animationPath === "/userPage/userHome" ? "channelInputDivTitleH2" : "null"}}
                    >Channel groups</h2>
                    <div className="channelInputDiv">
                        {state.channelInputDiv.map((val) => {
                            return (
                                <div className="checkboxDiv" key={Math.random()}>
                                    {val.map((value) => {
                                        return(
                                            <p key={Math.random()} className="ChildP"><input type="checkbox" 
                                                onChange={(e) => {
                                                    e.target.style.backgroundImage = e.target.checked ?  "url(" + imgCheckbox + ")" : "none"
                                                }}/> 
                                            {value}</p>
                                        ) 
                                    })}
                                </div> 
                            )
                        })}
                    </div>
                </div>
                <div className="channelS" style={{animationName:state.animationPath === "/userPage/userHome" ? "channesAnimation" : "null"}}>                                                                 
                        <h2 style={{animationName:state.animationPath === "/userPage/userHome" ? "channesH2" : "null"}}>Channels</h2>
                        <div className="channelsChildDiv" style={{animationName:state.animationPath === "/userPage/userHome" ? "childDiv" : "null"}}>
                            {state.tvChannelTwoSection.map((val) => {
                                return (
                                    <div className="channe2" key={Math.random()}  style={{animationName:state.animationPath === "/userPage/userHome" ? "Ablank" : "null"}}>
                                        {val.map((val) => {
                                            return (
                                                <Link key={Math.random()}  to={{path:"#"}} target="_blank" id="Ablank"
                                                    style={{animationName:state.animationPath === "/userPage/userHome" ? "chennels2DivAnim" : "null"}}
                                                >
                                                    <img src={val} alt="" className="ChDivImg"/>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            </div>
            <SecondChannelsDiv/>
        </section>
    )
}