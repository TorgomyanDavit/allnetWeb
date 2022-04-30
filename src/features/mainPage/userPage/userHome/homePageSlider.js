import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';



function HomeSliderPage ({data}) {
    const state = useSelector((state) => state.mainPage)
    const [load,setLoad] = useState(true)

    // load ? "/mainPageImages/homeLoading.gif" : 
    // onLoad={(e) => {
    //     console.log(e);
    //     // debugger
    //    setLoad(false)
    // }}

    useEffect(() => {
        if(data.image_path !== undefined)setLoad(false)
    },[data.image_path])
    return (
        <div className="homeImgDiv">
            <p className="homeImg">
                {load ? <img src={ "/mainPageImages/homeLoading.gif"} alt="homeImg" width="477" height="284"/> 
                : <img src={ `${state.serverForImg}${data.image_path}`} alt="homeImg" width="477" height="284"/>}
            </p>
            <div className="registerDescriptionDiv">
                <p className="description">{data.title}</p>
                <p className="description2">{data.description}</p>
                <Link to={{ pathname: data.button_link }} target="_blank" className="mainImgButton">{data.button_name}</Link>
            </div>
            <p className="homeUnderline"></p>
        </div>
    ) 
}

export default HomeSliderPage