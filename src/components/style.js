import styled from "styled-components";

export const CardsContainer = styled.div`
  background-color: rgb(60 62 68);
  display: flex;
  height: 300px;
  width: 580px;
  border-radius: 1.5em;
  margin-top: 2em;
`;

export const ImageCard = styled.img`
  height: 100%;
  border-top-left-radius: 1.5em;
  border-bottom-left-radius: 1.5em;
`;
export const CharacterInfo = styled.div`
  margin: 1em 1em 1em 1em;
`;

export const NameCard = styled.h2`
  font-size: 1.5em;
  color: white;
  font-weight: bold;
`;
export const DivIcon = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

export const Icon = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.isAlive === "Alive" ? "green" : "red")};
  height: 0.5rem;
  width: 0.5rem;
  margin-top: 0.3em;
`;

export const StatusCard = styled.h4`
  margin-left: 0.5em;
  color: rgb(255, 255, 255);
`;

export const LastLocation = styled.h2`
  color: rgb(158, 158, 158);
  margin-bottom: 0.5em;
  font-size: 1.2em;
`;
export const DescriptionLastLocation = styled.p`
  color: rgb(245, 245, 245);
  font-size: 1em;
  margin-bottom: 1em;
`;

export const FirstSeeIn = styled.h2`
  color: rgb(158, 158, 158);
  font-size: 1em;
  margin-bottom: 1em;
`;
export const DescriptionFirstSeeIn = styled.p`
  color: rgb(245, 245, 245);
  margin-bottom: 0.5em;
  font-size: 1.2em;
`;
