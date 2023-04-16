import styled from "styled-components";
import { Cards } from "./components/Cards";
import userAPI from "./hooks/userAPI";
import { useState } from "react";


const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

const ContainerNext = styled.div`
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

const ButtonNextLeft = styled.button`
 font-size: 1.2em;
 margin-right: 2em;
 border-radius: 10px;
 padding: 0.5em;
 box-shadow: 5px 5px 5px black;
 transition: 200ms ease-in-out;
 
 &:hover:not([disabled]){
    cursor: pointer;
    background-color: rgb(39, 43, 51);
    color: white;
  }
`
const DescriptionPage = styled.h2`
font-size: 1.5em;
margin-top: 0.5em;
`

const ButtonNextRight = styled.button`
font-size: 1.2em;
margin-left: 2em;
border-radius: 10px;
padding: 0.5em;
box-shadow: 5px 5px 5px black;
transition: 500ms ease-in-out;


&:hover:not([disabled]){
    cursor: pointer;
    background-color: rgb(39, 43, 51);
    color: white;
  }
`

function App() {
  const [nextpage , setNextPage] = useState(1)
  const { rickData, isLoading } = userAPI(nextpage);


  if(isLoading) return <h2>Carregando...</h2>

  return (
    <Container>
      <Containerh1>
        <Title>The Rick and Morty</Title>
      </Containerh1>
      <ContainerNext>
      <ButtonNextLeft disabled={nextpage === 1} onClick={(e) => setNextPage((prev) => prev - 1)}>Previos Page</ButtonNextLeft>
      <DescriptionPage>Page: {nextpage}</DescriptionPage>
      <ButtonNextRight disabled= {nextpage === 42} onClick={(e) => setNextPage((prev) => prev + 1)}>Next Page </ButtonNextRight>
      </ContainerNext>
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
