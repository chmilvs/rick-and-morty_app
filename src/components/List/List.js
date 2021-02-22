import { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CharCard from "../CharCard/CharCard";
import { Context } from "../../context/context";
import Loading from "../Loading/Loading";
import useCharacters from "../../utils/hooks/useCharacters";
import InfiniteScroll from "react-infinite-scroll-component";

function List() {
  const { dispatch } = useContext(Context);
  const [page, setPage] = useState(1);
  const [characters, error, loading] = useCharacters(page);
  console.log(characters);
  useEffect(() => {
    dispatch({ type: "INIT_CHARACTERS", payload: characters });
  }, [page, characters, dispatch]);

  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={() => setPage(page + 1)}
      hasMore={true}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {error && (
          <p
            style={{
              color: "white",
              position: "absolute",
              top: "50%",
              right: "50%",
            }}
          >
            {error}
          </p>
        )}
        {loading && <Loading />}
        {characters &&
          characters.map((character) => (
            <CharCard character={character} key={character.id} />
          ))}
      </div>
    </InfiniteScroll>
  );
}

export default List;
