"use client";

import React, { useState, useEffect } from "react";
import "./Welcomen.css";

/**
 * Componente Pokémon del Día que muestra un Pokémon aleatorio.
 *
 * Se encarga de realizar una petición a la API para obtener los datos de todos
 * los Pokémon y seleccionar uno al azar para mostrarlo en un contenedor.
 *
 * @returns {JSX.Element} El contenedor con el Pokémon del día.
 */

export default async function PokemonDay() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch("http://localhost:3000/pokemons");
      const pokemons = await res.json();
      const randomPokemon =
        pokemons[Math.floor(Math.random() * pokemons.length)];
      setPokemon(randomPokemon);
    }

    fetchPokemon();
  }, []);

  return (
    pokemon && (
      <div className="pokemon-of-the-day">
        <h2 className="text-2xl font-bold text-center">Pokémon del Día</h2>
        <div className="pokemon-card text-center mt-4">
          <h3 className="text-3xl font-semibold">{pokemon.name}</h3>
          <img
            src={pokemon.image}
            className="pokemon-image"
            alt={pokemon.name}
          />
          <p className="text-lg mt-2">
            ¡Descubre más sobre {pokemon.name} y sus habilidades!
          </p>
        </div>
      </div>
    )
  );
}
