import { Component } from "react";
import './card.style.css'

class Card extends Component {
    render() {
        console.log('Render from Card with Monsters: ' + this.props.monster);
        const {id, name, email} = this.props.monster;
        return (
            <div key={id} 
                 className='card-container'>
                <img alt={`monster ${name}`}
                     src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }

}

export default Card;
