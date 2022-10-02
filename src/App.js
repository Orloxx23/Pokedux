import { Col, Spin } from "antd";
import "./App.css";
import logo from "./statics/logo.svg";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { getPokemon } from "./api";

function App() {
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pkedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
