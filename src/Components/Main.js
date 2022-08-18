import '../App.css';
import Card from '../Components/Card';
import backgroundPlanetCard from '../img/background-moon.jpg';
import backgroundPeopleCard from '../img/background-people.jpg';
import backgroundMovieCard from '../img/background-camera.jpg';
import People from '../Components/People';
import Planets from '../Components/Planets';
import Films from '../Components/Films';
import Home from '../Components/Home';
import {Routes, Route, 
    BrowserRouter as Router, Redirect, withRouter, Link} from 'react-router-dom';
import React from 'react';

function Main() {
    return(
        <React.Fragment>
            <Router>
            <div className="container center-screen">
                    <div className="item">
                        <Link to="/people"><Card title="People" text="Find your favorite people here!" background={backgroundPeopleCard}/></Link>
                    </div>
                    <div className="item">
                        <Link to="/planets"><Card title="Planets" text="All the Planets from Star Wars Universe" background={backgroundPlanetCard}/></Link>
                    </div>
                    <div className="item">
                        <Link to="/films"><Card title="Films" text="All your  favorite Movies" background={backgroundMovieCard}/></Link>
                    </div>
                </div> 
                       
                <div className="container center-screen">
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/people' element={<People/>} />
                    <Route path='/planets' element={<Planets/>} />
                    <Route path='/films' element={<Films/>} />
                    
                </Routes>
                </div>
            </Router>
            

            
            
        </React.Fragment>
    );
}

export default Main;