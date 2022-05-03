import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"


export function ChannelGroup() {
    const [t,i18n] = useTranslation()

    const state = useSelector((state) => state.mainPage)
    const {channel_groups} = state.userHomePage
    return (
        <div className="mainChannelGroup">
            <p className="channelTittel" 
                style={{animationName:state.animationPath === "/userPage/userChannel" ? "channelTittel" : "null"}}
            >
                {t("description.channelGroup")}
            </p>
            <div className="channelGroupChecked">
                <div className="groupinput">
                    {
                        channel_groups ? 
                        channel_groups.map((val) => <p key={Math.random()}>{val.genre}</p>) : "" 
                    }
                </div>
            </div>
        </div>
    )
}