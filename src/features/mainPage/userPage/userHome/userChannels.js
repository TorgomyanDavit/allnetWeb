import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

export function UserChannels() {
    const state = useSelector((state) => state.mainPage)
    console.log(state.animationPath)
    return (
        <div className="user-channels-div">
            <div className="user" 
            style={{animationName:state.animationPath === "/userPerson" ? "user" : "null"}}>
                <div className="userName">
                    <img src="/mainPageImages/userImg.png" alt="" 
                        style={{animationName:state.animationPath === "/userPerson" ? "userImg" : "null"}}
                    />
                    <p style={{animationName:state.animationPath === "/userPerson" ? "userParagraph" : "null"}}>
                        <span>Raya Galstyan</span>
                        <span>Balance:<b>100 $</b></span>
                    </p>
                </div>
                <Link to={"/userPerson"}>
                   <button style={{animationName:state.animationPath === "/userPerson" ? "userButton" : "null"}}>
                        <img src="/mainPageImages/buttonSlack.png" alt=""/>
                   </button>
                </Link>
            </div>
            <label style={{animationName:state.animationPath === "/userPerson" ? "labelFor" : "null"}}
                className="labelForHome">
                Uploud image<input type="file" style={{display:"none"}}/>
            </label>
            <div className="Channels" 
                style={{animationName:state.animationPath === "/userChannel" ? "channels2" : "null"}}
            >
                <p className="titleChannel">Channels</p>
                <div className="TvChannels" style={{animationName:state.animationPath === "/userChannel" ? "tvChennels" : "null"}}>
                    <p className="channel1"  style={{animationName:state.animationPath === "/userChannel" ? "Channelp" : "null"}}>
                        {state.tvChannel.oneGroup.map((val) => <Link to={{pathname:"#"}} style={{animationName:state.animationPath === "/userChannel" ? "tvChennelsSpan" : "null"}}
                        key={Math.random()} target="_blank"><img src={val} alt=""/></Link>)}
                    </p>
                    <p className="channel2"style={{animationName:state.animationPath === "/userChannel" ? "Channelp" : "null"}}>
                        {state.tvChannel.twoGroup.map((val) => <Link to={{pathname:"#"}} style={{animationName:state.animationPath === "/userChannel" ? "tvChennelsSpan" : "null"}}
                        key={Math.random()} target="_blank"><img src={val} alt=""/></Link>)}
                    </p>
                </div>
            </div>
        </div>
    )
}