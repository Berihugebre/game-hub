import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { Spinner, Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGameResponse>("/xgames")
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.length > 0 &&
          games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
};

export default GameGrid;
