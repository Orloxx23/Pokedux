import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavortie } from '../actions';
import StarButton from './StarButton';

const PokemonCard = ({ name, image, types, id, favorite }) => {
    const dispatch = useDispatch();

    const typesString = types.map((type) => type.type.name).join(', ');
    
    const handleOnFavortie = () => {
        dispatch(setFavortie({pokemonId: id}))
    }

    return <Card 
    title={name}
    cover={<img src={image} alt={name}/>}
    extra={<StarButton isFavorite={favorite} onClick={() => handleOnFavortie()}/>}
    >
        <Meta description={typesString}/>
    </Card>
}

export default PokemonCard;