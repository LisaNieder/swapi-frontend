import './Card.css';

export default function Card(props) {
    const { title, text } = props; 
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    {title}
                </div>
                <div class="flip-card-back">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
