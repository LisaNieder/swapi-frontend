import '../App.css';
import People from '../Components/People';
import Planets from '../Components/Planets';
import Films from '../Components/Films';
import {Routes, Route, 
    BrowserRouter as Router, Redirect, withRouter} from 'react-router-dom';
import React from 'react';

function Main() {
    return(
        <React.Fragment>
           
            <div className="container center-screen">             
                <Router>
                <Routes>
                    <Route path='/people' element={<People/>} />
                    
                </Routes>
            </Router>
            </div>
        </React.Fragment>
    );
}

export default Main;