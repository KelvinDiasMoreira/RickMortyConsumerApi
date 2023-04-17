import styled from "styled-components";


export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

export const ContainerNext = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`

export const Containerh1 = styled.div`
  padding-top: 5em;
`;

export const Title = styled.h1`
  text-align: center;
  color: rgb(32, 35, 41);
  border: none;
  font-size: 5em;
`;

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 100%;
  height: 240em;
  margin: 3em auto 3em;
  gap: 2em;
  justify-content: center;
  background-color: rgb(39, 43, 51);
  
`

export const ButtonNextLeft = styled.button`
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
export const DescriptionPage = styled.h2`
font-size: 1.5em;
margin-top: 0.5em;
`

export const ButtonNextRight = styled.button`
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