import '../App.css';
import Card from '../Components/Card';
import backgroundPlanetCard from '../img/background-moon.jpg';
import backgroundPeopleCard from '../img/background-people.jpg';
import backgroundMovieCard from '../img/background-camera.jpg';
import People from '../Components/People';
import Planets from '../Components/Planets';
import Films from '../Components/Films';
import Home from '../Components/Home';
import Person from '../Components/Person';
import {Routes, Route, 
    BrowserRouter as Router, Redirect, withRouter, Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React from 'react';

function Main() {
    return(
        <React.Fragment>
            <Router>
            <div className="container center-screen">
                    <div className="item">
                        <HashLink to="/people#anchor"><Card title="People" text="Find your favorite people here!" background={backgroundPeopleCard}/></HashLink>
                    </div>
                    <div className="item">
                        <HashLink to="/planets#anchor"><Card title="Planets" text="All the Planets from Star Wars Universe" background={backgroundPlanetCard}/></HashLink>
                    </div>
                    <div className="item">
                        <HashLink to="/films#anchor"><Card title="Films" text="All your  favorite Movies" background={backgroundMovieCard}/></HashLink>
                    </div>
                </div> 
                       
                <div className="container center-screen">
                    <a id="anchor"></a>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/people' element={<People/>} />
                    <Route path='/planets' element={<Planets/>} />
                    <Route path='/films' element={<Films/>} />
                    <Route path='/person' element={<Person /> } />
                    
                </Routes>
                </div>
            </Router>
            

            
            
        </React.Fragment>
    );
}

export default Main;