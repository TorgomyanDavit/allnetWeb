
import React ,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import MainPage from '../features/mainPage/mainPage';
import { getAllContent } from '../features/mainPage/getRequest';
import './AuntContainer.css';




function AuntContainer() {
    const state = useSelector((state) => state.mainPage)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllContent(state.server))
    },[])

    return (
        <div className="AuntContainer">
            {state.loading.mainLoading ? "" : <div className="loading"><img src="/mainPageImages/homeLoading.gif" alt="loading"/></div>}
            <Router path="/">
                <MainPage/>
            </Router>
        </div>
    )
}

export default AuntContainer;
