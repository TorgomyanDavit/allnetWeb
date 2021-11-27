import React from 'react';
import MainPage from '../features/mainPage/mainPage';
import './AuntContainer.css';
import { BrowserRouter as Router} from "react-router-dom";

function AuntContainer() {
    return (
        <div className="AuntContainer">
            <Router path="/">
                <MainPage/>
            </Router>
        </div>
    )
}

export default AuntContainer;
