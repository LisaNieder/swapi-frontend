import { useEffect, useState } from 'react';

export default function People () {
    const [data, setData] = useState([]);

       const fetchData = () => {
        fetch('https://swapi.dev/api/people')
        .then(response => {
            return response.json()
        })
        .then(data => setData(data))
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div>
            render the data here {data["count"]};
        </div>
    )
}