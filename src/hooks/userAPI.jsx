import axios from "axios";
import { useEffect, useState } from "react";

export default function userAPI() {
  const [rickData, setRickData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character?page=1")
      .then((response) => {
        const characters = response.data.results;
        const episodes = characters.map((char) => {
          return char.episode[0].split("/").pop();

        }).join();
        axios.get(`https://rickandmortyapi.com/api/episode/${episodes}`)
        .then(response =>{
            const newRickData = characters.map((char) => {
               const idEpisode = char.episode[0].split("/").pop()
               const nameEpisode = response.data.find((ep) => ep.id === Number(idEpisode) )
               char.firstSeen = nameEpisode.name
               return char
            })
            setRickData(newRickData);

        })
      })
      .catch((err) => new Error(err))
      .finally(setIsLoading(false));
  }, []);

  return { rickData, isLoading };
}
