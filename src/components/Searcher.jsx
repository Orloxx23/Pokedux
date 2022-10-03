import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/dataSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e));
  }

  return <Input placeholder="Buscar..." onChange={(e) => handleSearch(e.target.value)}/>
}

export default Searcher;
