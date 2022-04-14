import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useDispatch, useSelector } from "react-redux"
import imgCheckbox from "../images/checkboxChect.jpg"
import { changeAnimation } from "../../mainPageSlice"




export function SecondChannelsDiv() {
    const dispatch = useDispatch()
    useEffect(() => {return () => dispatch(changeAnimation({value:"/userPage/userChannel"}))},[])

    const state = useSelector((state) => state.mainPage)
    const [placeholder,setPlaceHolder] = useState(`https://www.youtube.com/watch?v=Dxnaf6kZnMAhttps: &#//www.youtube.com/watch?v=Dxnaf6kZnMA`)
    const [value,setValue] = useState("")
    return (
        <div className="secondThreepageDiv">
            <div className="oneDIvCopy">
                <h2>Download playlist</h2>
                <p>
                    Your playlist is available for 
                    download at the address below.
                    Copy the link to the playlist and 
                    use it in your player to play it.
                </p>
                <form onSubmit={(e) =>{
                    e.preventDefault()
                    setPlaceHolder(value)
                    setValue("")
                }} className="formInputCopy">
                    <input type="texteria" value={value} onChange={(e) => setValue(e.target.value)}
                        placeholder={placeholder} 
                    />
                    <CopyToClipboard text={placeholder}>
                        <p><img src="/mainPAgeImages/copy.png" alt=""/></p>
                    </CopyToClipboard>
                </form>
            </div>
            <div className="fileFormat">
                <h2>File format</h2>
                <p>
                    The playlist in the preset format - 
                    M3U8 is available via the link provided 
                    above. If your player does not support this 
                    playlist file format, you can download the playlist 
                    file in the required format.
                </p>
                <h2 className="formatInputDivh2">Available formats:</h2>
                <form className="formatInputDiv">
                    {state.formatInput.map((val) => {
                        return (
                            <label key={Math.random()} className="formatinput">
                            <input type="checkbox" onChange={(e) => {
                                e.target.style.backgroundImage = e.target.checked ?  "url(" + imgCheckbox + ")" : "none"
                            }}/>
                                <span>{val}</span>
                            </label>
                        )
                    })}
                </form>
            </div>
        </div>
    )
}