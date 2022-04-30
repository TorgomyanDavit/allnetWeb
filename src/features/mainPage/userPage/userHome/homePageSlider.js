import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function HomeSliderPage ({data}) {
    const state = useSelector((state) => state.mainPage)

    return (
        <div className="homeImgDiv">
            <p className="homeImg">
                <img src={`${state.serverForImg}${data.image_path}`} alt="homeImg" width="477" height="284"/>
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