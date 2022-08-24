import React, { useEffect, useState } from 'react';
import '../App.css';

function Planets() {
    const [data, setData] = React.useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      
        fetch('https://swapi.dev/api/planets')
        .then(res => 
            res.json())
        .then(data => {
            setData(data.results);
            setIsLoading(false);
        })
        .catch(error => console.log(error)); 
    }, [])

    return(
        <React.Fragment>
        <div className="container-column">
            
            
            {isLoading && <p>Wait I'm Loading data for you</p>}
            <ol>
            {!isLoading && data.map(item => {
                return <li key={item.name}>
                    <p>Name: {item.name}</p>
                    <p>Terrain: {item.terrain}</p>
                    <p>Population: {item.population}</p>
                    <p>Climate: {item.climate}</p>
                </li>
            }
            

            )}
            </ol>
        </div>
        
        
    </React.Fragment>
    )
}

export default Planets;