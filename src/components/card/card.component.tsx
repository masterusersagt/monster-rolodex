import { Monster } from '../../App';

import './card.style.css'

type CardProps = {
  monster: Monster;
};

const CardEffect = ({monster: {id, name, email}}: CardProps) => {

  return (
    <div key={id} className='card-container'>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardEffect;
