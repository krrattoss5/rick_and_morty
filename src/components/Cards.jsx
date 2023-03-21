import Card from './Card';
import './Cards.css';

export default function Cards({characters}) {
   return(
      <div className='crds_styles'>
            {characters.map(character => <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={() => window.alert   ('Emulamos que se cierra la card')}
            />)}
      </div>
   )
}
