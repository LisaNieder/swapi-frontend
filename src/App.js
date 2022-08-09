import logo from './logo.svg';
import './App.css';
import People from '../src/Components/People';
import Card from '../src/Components/Card';
import header from '../src/img/space-moon.jpg'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <p className="header-text">Star Wars</p>
        <p className="header-text header-subline">Put in a catchy headline here!</p>
        
      </div>
      <div className="container center-screen">
        <div className="item">
          <Card title="People" text="Find your favorite people here!"/>
        </div>
        <div className="item">
        <Card title="Planets" text="All the Planets from Star Wars Universe"/>
        </div>
        <div className="item">
        <Card title="Films" text="All your  favorite Movies"/>
        </div>
      </div>
        <img className="header-img" src={header}/>
      
    </div>
  );
}

export default App;
