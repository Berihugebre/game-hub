import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatfromSelector from "./components/PlatfromSelector";
import { Platform } from "./hooks/usePlatfroms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface QueryGame {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [queryGame, setQueryGame] = useState<QueryGame>({} as QueryGame);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setQueryGame({ ...queryGame, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            onSelectGenre={(genre) => setQueryGame({ ...queryGame, genre })}
            selectedGenre={queryGame.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading queryGame={queryGame} />
          <HStack marginBottom={5} spacing={5}>
            <PlatfromSelector
              onSelectedPlatfrom={(platform) =>
                setQueryGame({ ...queryGame, platform })
              }
              selectedPlatform={queryGame.platform}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setQueryGame({ ...queryGame, sortOrder })
              }
              sortOrder={queryGame.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid queryGame={queryGame} />
      </GridItem>
    </Grid>
  );
};

export default App;
