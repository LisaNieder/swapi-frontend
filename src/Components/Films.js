import React, { useEffect, useState } from 'react';
import '../App.css';
import ContentCard from '../Components/ContentCard.js';

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
                    return <div>
                    <ContentCard type="films" title={item.title} episode={item.episode_id} releaseDate={item.release_date} />
                        </div>
                }
                

                )}
                </ol>
            </div>
            
            
        </React.Fragment>
    )
}

export default Films;