import { Col } from 'antd';
import './App.css';
import logo from './statics/logo.svg';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      await  axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
    }

    getPokemons();
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
