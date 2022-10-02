import { Col } from 'antd';
import './App.css';
import logo from './statics/logo.svg';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPokemons } from './actions';
import { getPokemon, getPokemonDetails } from './api';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsDetailed));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pkedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
