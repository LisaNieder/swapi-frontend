import logo from './logo.svg';
import './App.css';
import People from '../src/Components/People';
import Card from '../src/Components/Card';

function App() {
  return (
    <div className="App">
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
        
      
    </div>
  );
}

export default App;
