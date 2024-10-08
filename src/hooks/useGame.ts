import { QueryGame } from "../App";
import useData from "./useData";

import { Platform } from "./usePlatfroms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number
  }


const useGame = (queryGame: QueryGame)=> useData<Game>('/games', 
  {
    params:{
      genres: queryGame.genre?.id, 
      platforms: queryGame.platform?.id,
      ordering: queryGame.sortOrder,
      search: queryGame.searchText
    }}, [queryGame]);

export default useGame;