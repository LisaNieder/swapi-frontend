import './Card.css';

export default function Card(props) {
    const { title, text } = props; 
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p className="center-front">{title}</p>
                </div>
                <div class="flip-card-back">
                    <p className="center-back"> {text}</p>
                </div>
            </div>
        </div>
    )
}
