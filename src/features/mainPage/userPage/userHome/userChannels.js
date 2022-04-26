import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import personImg from "../../userPage/images/PersonImg.png"


export function UserChannels() {
    const state = useSelector((state) => state.mainPage)
    const {user} = state.userPage 


    const {bouquet_channels} = state.userHomePage.tariffType ? state.userHomePage.tariffType[0].bouquet_id[0] : []
    console.log(bouquet_channels);




    return (
        <div className="user-channels-div">
            <div className="user" 
            style={{animationName:state.animationPath === "/userPage/userPerson" ? "user" : "null"}}>
                <div className="userName">
                    {/* <img src={!!user ? user.photo ? `${state.serverForImg}/${user.photo.path}`: personImg : ""}  alt="personImg" 
                        style={{animationName:state.animationPath === "/userPage/userPerson" ? "userImg" : "null"}}
                    /> */}
                    <p style={{animationName:state.animationPath === "/userPage/userPerson" ? "userParagraph" : "null"}}>
                        <span>{user ? user.username : ""}</span>
                        <span>Balance:<b>100 $</b></span>
                    </p>
                </div>
                <Link to={"/userPage/userPerson"}>
                   <button style={{animationName:state.animationPath === "/userPage/userPerson" ? "userButton" : "null"}}>
                        <img src="/mainPageImages/buttonSlack.png" alt=""/>
                   </button>
                </Link>
            </div>
            <label style={{animationName:state.animationPath === "/userPage/userPerson" ? "labelFor" : "null"}}
                className="labelForHome">
                Uploud image<input type="file" style={{display:"none"}}/>
            </label>
            <div className="Channels" 
                style={{animationName:state.animationPath === "/userPage/userChannel" ? "channels2" : "null"}}
            >
                <p className="titleChannel">Channels</p>
                <div className="TvChannels" style={{animationName:state.animationPath === "/userPage/userChannel" ? "tvChennels" : "null"}}>
                    {
                        bouquet_channels ? bouquet_channels.map((val) => <span className="spanXtream" key={val.id}><img className="imgXtream" src={val.stream_icon}/></span>) : ""
                    }
                </div>
            </div>
        </div>
    )
}