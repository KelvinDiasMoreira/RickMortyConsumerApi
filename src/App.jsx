import { Cards } from "./components/Cards";
import userAPI from "./hooks/userAPI";
import { useState } from "react";
import {
  Container,
  ContainerNext,
  Containerh1,
  Title,
  GridCards,
  ButtonNextLeft,
  DescriptionPage,
  ButtonNextRight,
} from "./style";

function App() {
  const [nextpage, setNextPage] = useState(1);
  const { rickData, isLoading } = userAPI(nextpage);

  if (isLoading) return <h2>Carregando...</h2>;

  return (
    <Container>
      <Containerh1>
        <Title>The Rick and Morty</Title>
      </Containerh1>
      <ContainerNext>
        <ButtonNextLeft
          disabled={nextpage === 1}
          onClick={(e) => setNextPage((prev) => prev - 1)}
        >
          Previos Page
        </ButtonNextLeft>
        <DescriptionPage>Page: {nextpage}</DescriptionPage>
        <ButtonNextRight
          disabled={nextpage === 42}
          onClick={(e) => setNextPage((prev) => prev + 1)}
        >
          Next Page{" "}
        </ButtonNextRight>
      </ContainerNext>
      <GridCards>
        {rickData.map((item) => {
          const { id, name, image, status, species, location, firstSeen } =
            item;
          return (
            <Cards
              key={id}
              name={name}
              img={image}
              isAlive={status}
              species={species}
              lastLocation={location.name}
              firstSeeIn={firstSeen}
            />
          );
        })}
      </GridCards>
    </Container>
  );
}

export default App;
