import React ,{ lazy , Suspense } from 'react';
import MainPage from '../features/mainPage/mainPage';
import './AuntContainer.css';
import { BrowserRouter as Router} from "react-router-dom";
import { useSelector } from 'react-redux';
// import ReactLoading from 'react-loading';
// const MainPage = lazy(() => import('../features/mainPage/mainPage'))

// const MainPage = lazy(() => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(import('../features/mainPage/mainPage')), 3000);
//     });
// });


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
