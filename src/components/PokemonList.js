/*Página da lista geral de pokemons*/
import React, { useEffect, useState } from "react";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchPokemons = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemons(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=20");
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="container">
      <h1>Lista de Pokémon</h1>
      <ul className="pokemon-list">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
            </li>
          ))
        ) : (
          <li>Nenhum Pokémon encontrado.</li>
        )}
      </ul>
      <div className="pagination">
        {prevPage && (
          <button onClick={() => fetchPokemons(prevPage)}>
            Página Anterior
          </button>
        )}
        {nextPage && (
          <button onClick={() => fetchPokemons(nextPage)}>
            Próxima Página
          </button>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
