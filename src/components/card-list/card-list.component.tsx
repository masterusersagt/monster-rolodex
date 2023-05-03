import { Monster } from '../../App';
import CardEffect from "../card/card.component";
import './card-list.style.css'

type CardListProps = {
  monsters: Monster[];
};

const CardListEffect = ({monsters}: CardListProps) => (
  <div className='card-list-container'>
    <div className='card-list' key='Filter Monster'>
      {
        monsters.map((monster) => {
          return <CardEffect monster={monster}></CardEffect>
        })
      }
    </div>
  </div>
);


export default CardListEffect;
