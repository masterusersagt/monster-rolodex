import { Component } from "react";
import Card from "../card/card.component"
import './card-list.style.css'

class CardList extends Component {
    render() {
        const {monsters} = this.props;
        console.log('Render from CardList with Monsters: ' + {monsters});

        return (
            <div className='card-list-container'>
                <div className='card-list'
                      key='Filter Monster'>
                    {
                        monsters.map((monster) => {
                            return <Card monster={monster}></Card>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CardList;
