import { QueryGame } from "../App";
import useData from "./useData";

import { Platform } from "./usePlatfroms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number
  }


const useGame = (queryGame: QueryGame)=> useData<Game>('/games', {params:{genres: queryGame.genre?.id, platforms: queryGame.platform?.id}}, [queryGame]);

export default useGame;