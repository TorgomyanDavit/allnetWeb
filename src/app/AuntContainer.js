
import React ,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import MainPage from '../features/mainPage/mainPage';
import './AuntContainer.css';
import { Helmet } from "react-helmet";






function AuntContainer() {
    const state = useSelector((state) => state.mainPage)

    return (
        <div className="AuntContainer">
            <Helmet><html lang={sessionStorage.getItem("lang") ? sessionStorage.getItem("lang") : "en"} /></Helmet>
            {state.loading.mainLoading === "loading" ? <div className="loading" style={{height:state.loadinHeight}}><img src="/mainPageImages/homeLoading.gif" alt="loading"/></div> : ""} 
            <Router path="/">
                <MainPage/>
            </Router>
        </div>
    )
}

export default AuntContainer;
