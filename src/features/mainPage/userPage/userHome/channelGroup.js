import { useSelector } from "react-redux"


export function ChannelGroup() {

    const state = useSelector((state) => state.mainPage)
    return (
        <div className="mainChannelGroup">
            <p className="channelTittel" 
                style={{animationName:state.animationPath === "/userPage/userChannel" ? "channelTittel" : "null"}}
            >
                Channel groups
            </p>
            <div className="channelGroupChecked">
                <div className="groupinput">
                    {state.channelGroupInput.oneGroup.map((val) => <label key={Math.random()}><input type="checkbox"/> {val}</label>)}
                </div>
                <div className="groupinput">
                    {state.channelGroupInput.twoGroup.map((val) =>  <label key={Math.random()}><input type="checkbox"/> {val}</label>)}
                </div>
            </div>
        </div>
    )
}

