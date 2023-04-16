import styled from "styled-components";

const CardsContainer = styled.div`
  background-color: rgb(60 62 68);
  display: flex;
  height: 300px;
  width: 580px;
  border-radius: 1.5em;
  margin-top: 2em;
`;

const ImageCard = styled.img`
  height: 100%;
  border-top-left-radius: 1.5em;
  border-bottom-left-radius: 1.5em;
`;
const CharacterInfo = styled.div`
  margin: 1em 1em 1em 1em;
`;

const NameCard = styled.h2`
  font-size: 1.5em;
  color: white;
  font-weight: bold;
`;
const DivIcon = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const Icon = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.isAlive === "Alive" ? "green" : "red")};
  height: 0.5rem;
  width: 0.5rem;
  margin-top: 0.3em;
`;

const StatusCard = styled.h4`
  margin-left: 0.5em;
  color: rgb(255, 255, 255);
`;

const LastLocation = styled.h2`
  color: rgb(158, 158, 158);
  margin-bottom: 0.5em;
  font-size: 1.2em;
`;
const DescriptionLastLocation = styled.p`
  color: rgb(245, 245, 245);
  font-size: 1em;
  margin-bottom: 1em;
`;

const FirstSeeIn = styled.h2`
  color: rgb(158, 158, 158);
  font-size: 1em;
  margin-bottom: 1em;
`;
const DescriptionFirstSeeIn = styled.p`
  color: rgb(245, 245, 245);
  margin-bottom: 0.5em;
  font-size: 1.2em;
`;

export const Cards = (props) => {
  return (
    <CardsContainer>
      <ImageCard src={props.img} />
      <CharacterInfo>
        <NameCard>{props.name}</NameCard>
        <DivIcon>
          <Icon isAlive={props.isAlive} />
          <StatusCard>
            {props.isAlive} - {props.species}
          </StatusCard>
        </DivIcon>
        <LastLocation>Ultima vez visto:</LastLocation>
        <DescriptionLastLocation>
          {props.lastLocation ? props.lastLocation : ""}
        </DescriptionLastLocation>
        <FirstSeeIn>Primeira Vez visto:</FirstSeeIn>
        <DescriptionFirstSeeIn>
          {props.firstSeeIn ? props.firstSeeIn : ""}
        </DescriptionFirstSeeIn>
      </CharacterInfo>
    </CardsContainer>
  );
};

export default Cards;
