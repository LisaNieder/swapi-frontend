import React, { useEffect, useState } from 'react';
import '../App.css';
import ContentCard from '../Components/ContentCard.js';

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
                return <div>
                <ContentCard type="planets" name={item.name} terrain={item.terrain} population={item.population} climate={item.climate} />
                    </div>
            }
            

            )}
            </ol>
        </div>
        
        
    </React.Fragment>
    )
}

export default Planets;