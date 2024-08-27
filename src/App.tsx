import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Game } from "./hooks/useGames3";
import { Genre } from "./hooks/useGenres";
import PlatfromSelector from "./components/PlatfromSelector";
import { Platform } from "./hooks/usePlatfroms";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatfromSelector
          onSelectedPlatfrom={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatfrom={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
