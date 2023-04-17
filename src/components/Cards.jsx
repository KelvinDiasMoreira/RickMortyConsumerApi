import {
  CardsContainer,
  ImageCard,
  CharacterInfo,
  NameCard,
  DivIcon,
  Icon,
  StatusCard,
  LastLocation,
  DescriptionLastLocation,
  FirstSeeIn,
  DescriptionFirstSeeIn,
} from "./style";

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
