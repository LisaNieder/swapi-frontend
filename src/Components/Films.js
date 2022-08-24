import React, { useEffect, useState } from 'react';
import '../App.css';

function Films() {
    const [data, setData] = React.useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      
        fetch('https://swapi.dev/api/films')
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
                    return <li key={item.title}>
                        <p>Title: {item.title}</p>
                        <p>Episode: {item.episode_id}</p>
                        <p>Release Date: {item.release_date}</p>
                    </li>
                }
                

                )}
                </ol>
            </div>
            
            
        </React.Fragment>
    )
}

export default Films;