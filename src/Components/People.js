import React, { useEffect, useState } from 'react';
import '../App.css';
import ContentCard from '../Components/ContentCard.js';

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
       
    return (
        <React.Fragment>
            <div className="container-column">
                
                
                {isLoading && <p>Wait I'm Loading data for you</p>}
                <ol>
                {!isLoading && data.map(item => {
                    return <div>
                    <ContentCard type="people" name={item.name} hairColor={item.hair_color} eyeColor={item.eye_color} gender={item.gender} birthYear={item.birth_year} />
                    </div>
                    
                }
                

                )}
                </ol>
            </div>
            
            
        </React.Fragment>
    )
}