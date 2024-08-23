import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { isLoading, error, games } = useGames();

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
