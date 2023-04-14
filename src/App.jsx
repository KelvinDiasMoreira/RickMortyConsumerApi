import styled from "styled-components";
import { Cards } from "./components/Cards";
import userAPI from "./hooks/userAPI";
import SearchBar from "./components/SearchBar";


const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

const ContainerSearch = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`
const Containerh1 = styled.div`
  padding-top: 5em;
`;

const Title = styled.h1`
  text-align: center;
  color: rgb(32, 35, 41);
  border: none;
  font-size: 5em;
`;

const GridCards = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 100%;
  height: 240em;
  margin: 3em auto 3em;
  gap: 2em;
  justify-content: center;
  background-color: rgb(39, 43, 51);
  
`

function App() {
  const { rickData, isLoading } = userAPI();

  if(isLoading) return <h2>Carregando...</h2>

  return (
    <Container>
      <Containerh1>
        <Title>The Rick and Morty</Title>
      </Containerh1>
      <ContainerSearch>
      <SearchBar>
      </SearchBar>
      </ContainerSearch>
      <GridCards>
      {rickData.map((item) => {
        const { id, name, image, status, species, location, firstSeen } = item;
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
