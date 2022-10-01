import { Col } from 'antd';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions';
import './App.css';
import logo from './statics/logo.svg';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { useEffect } from 'react';
import axios from "axios"

function App({ pokemons, setPokemons }) {
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
