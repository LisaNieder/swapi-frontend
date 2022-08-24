import React, { useEffect, useState } from 'react';
import '../App.css';
import Fetch from '../Components/Fetch';

export default function People () {
    const [data, setData] = React.useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      
        fetch('https://swapi.dev/api/people')
        .then(res => 
            res.json())
        .then(data => {
            setData(data.results);
            setIsLoading(false);
        })
        .catch(error => console.log(error)); 
    }, [])
    
    console.log(data);
    
    return (
        <React.Fragment>
            <div className="container-column">
                
                
                {isLoading && <p>Wait I'm Loading data for you</p>}
                <ol>
                {!isLoading && data.map(item => {
                    return <li key={item.name}>
                        <p>Name: {item.name}</p>
                        <p>Hair Color: {item.hair_color}</p>
                        <p>Eye Color: {item.eye_color}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Birth Year: {item.birth_year}</p>
                    </li>
                }
                

                )}
                </ol>
            </div>
            
            
        </React.Fragment>
    )
}