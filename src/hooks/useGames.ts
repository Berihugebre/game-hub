import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";


export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }
  
const useGames = ()=>{
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/xgames", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
        console.log(err);
      });

      return ()=> controller.abort();
  }, []);

  return {isLoading,error, games}
}

export default useGames;

