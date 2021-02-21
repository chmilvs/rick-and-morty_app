import axios from "axios";
import { useEffect, useState } from "react";

export default function useCharacters(page) {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        setCharacters([...characters, ...res.data.results]);
        setLoading(false);
      })
      .catch((e) => setError("Characters were not unloaded!"));
  }, [page]);

  return [characters, setCharacters, error, loading];
}
