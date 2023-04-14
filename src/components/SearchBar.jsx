import styled from "styled-components";

const TextSearch = styled.input`
  width: 300px;
  height: 50px;
  font-size: 2em;
  border-radius: 15px;
`

export const SearchBar = () => {
  return (
      <TextSearch placeholder="Buscar.." type="text"/>
  );
};

export default SearchBar;
