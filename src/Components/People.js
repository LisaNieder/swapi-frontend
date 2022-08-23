import React, { useEffect, useState } from 'react';
import Search from '../Components/Search';
import '../App.css';

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
                <div className="item">
                    <Search />
                </div>
                {isLoading && <p>Wait I'm Loading data for you</p>}
                render the data here {!isLoading && data.map(item => {
                    return <p>{item.name}</p>
                }

                )}
                
            </div>
            
            
        </React.Fragment>
    )
}