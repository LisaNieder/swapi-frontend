import '../App.css';
import Card from '../Components/Card';
import backgroundPlanetCard from '../img/background-moon.jpg';
import backgroundPeopleCard from '../img/background-people.jpg';
import backgroundMovieCard from '../img/background-camera.jpg';

function Header() {
    return (
        <div>
           <div className="Header">
            <p className="header-text header-headline">Star Wars</p>
            <p className="header-text header-subline">Put in a catchy headline here!</p>
        
            </div> 
            <div className="App">
                <div className="container center-screen">
                    <div className="item">
                        <Card title="People" text="Find your favorite people here!" background={backgroundPeopleCard}/>
                    </div>
                    <div className="item">
                        <Card title="Planets" text="All the Planets from Star Wars Universe" background={backgroundPlanetCard}/>
                    </div>
                    <div className="item">
                        <Card title="Films" text="All your  favorite Movies" background={backgroundMovieCard}/>
                    </div>
                </div>   
            </div>
        </div>
        
      
    )
}

export default Header;