import React ,{ lazy , Suspense } from 'react';
// import MainPage from '../features/mainPage/mainPage';
import './AuntContainer.css';
import { BrowserRouter as Router} from "react-router-dom";
import ReactLoading from 'react-loading';

const MainPage = lazy(() => import('../features/mainPage/mainPage'))


function AuntContainer() {
    return (
        <div className="AuntContainer">
        <Suspense fallback={<ReactLoading type={"spokes"} className='loading' color={"black"} height={500} width={200} />}>
            <Router path="/">
                <MainPage/>
            </Router>
        </Suspense>
        </div>
    )
}

export default AuntContainer;
