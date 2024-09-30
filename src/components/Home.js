/*Página home que busca pokemons*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (pokemonName) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      const data = await response.json();
      setPokemon(data);

      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();
      const evolutionChainResponse = await fetch(
        speciesData.evolution_chain.url
      );
      const evolutionChainData = await evolutionChainResponse.json();

      const collectEvolutions = (chain) => {
        const evolutionsList = [];
        let current = chain;
        while (current) {
          evolutionsList.push(current.species.name);
          current = current.evolves_to[0];
        }
        return evolutionsList;
      };

      setEvolutions(collectEvolutions(evolutionChainData.chain));
    }
  };

  return (
    <div className="container">
      <h1>Página Inicial</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Digite o nome do Pokémon"
        />
        <button type="submit">Buscar</button>
      </form>

      {pokemon && (
        <div className="pokemon-detail">
          <h2>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>

          <h3>Tipos:</h3>
          <div className="types">
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                className={`type ${typeInfo.type.name}`}
              >
                {typeInfo.type.name.charAt(0).toUpperCase() +
                  typeInfo.type.name.slice(1)}
              </span>
            ))}
          </div>

          <h3>Evoluções:</h3>
          <ul>
            {evolutions.map((evolution) => (
              <li key={evolution}>
                <Link to={`/pokemon/${evolution}`}>
                  {evolution.charAt(0).toUpperCase() + evolution.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
