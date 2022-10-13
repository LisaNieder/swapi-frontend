import './ContentCard.css';

export default function ContentCard(props) {
    const { type, name, hairColor, eyeColor, gender, birthYear, terrain, population, climate, title, episode, releaseDate } = props; 
    switch(type) {
        case "people":
            return (
                <div class="Card">
                    <p>Name: {name}</p>
                    <p>Hair Color: {hairColor}</p>
                    <p>Eye Color: {eyeColor}</p>
                    <p>Gender: {gender}</p>
                    <p>Birth Year: {birthYear}</p>
                    
                </div>
            );
            case "planets":
                return (
                <div class="Card">
                    <p>Name: {name}</p>
                    <p>Terrain: {terrain}</p>
                    <p>Population: {population}</p>
                    <p>Climate: {climate}</p>   
                </div>
                );
            case "films":
                return (
                    <div class="Card">
                        <p>Title: {title}</p>
                        <p>Episode: {episode}</p>
                        <p>Release Date: {releaseDate}</p>   
                    </div>
                    ); 
        default:
            return (
                    <div class="Card">           
                    </div>
            );
    }
    
}