import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";
import { Platform } from "./usePlatfroms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number
  }
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }
  
const useGames2 = ()=>{
  let [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/xgames", {signal: controller.signal})
      .then((res) => {
        localStorage.setItem("games", JSON.stringify(res.data.results))
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

  const local = localStorage.getItem('games');
  games = local? JSON.parse(local): [];
 

  return {isLoading,error, games}
}

export default useGames2;

