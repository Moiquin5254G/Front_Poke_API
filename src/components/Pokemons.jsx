import { Container } from "@mui/material";
import "./Pokemons.css";

/**
 * Componente Pokemons que recupera y muestra una lista de Pokémon.
 * Realiza una petición a la API para obtener los datos de los Pokémon
 * y los renderiza en una cuadrícula con estadísticas y tipos.
 *
 * @async
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.className - Clase CSS opcional para personalizar el estilo del componente.
 * @returns {JSX.Element} El componente de Pokémon renderizado.
 */
export default async function Pokemons({ className }) {
  const res = await fetch("http://localhost:3000/pokemons");
  const data = await res.json();

  const typeEmojis = {
    fire: "🔥",
    water: "💧",
    grass: "🍃",
    electric: "⚡",
    rock: "🪨",
    ghost: "👻",
    psychic: "🔮",
    normal: "🐾",
    fighting: "🥊",
    flying: "🌪",
    poison: "☠️",
    ground: "🌍",
    steel: "⚙️",
    ice: "❄️",
    dragon: "🐉",
    dark: "🌑",
    fairy: "✨",
    bug: "🐛",
    unknown: "❔",
    stellar: "🌌",
  };

  /**
   * Función que renderiza el tipo de Pokémon junto con su emoji.
   *
   * @param {string} type - El tipo de Pokémon.
   * @returns {string} El tipo de Pokémon formateado con su emoji.
   */
  const renderTypeWithEmoji = (type) => `${typeEmojis[type] || ""} ${type}`;

  return (
    <div className={className}>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer">
          {data.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <div className="text-3xl mb-2 p-2 flex justify-center items-center text-center font-bold bg-[#003A70] text-white rounded-md">
                {pokemon.name}
              </div>
              <div className="mb-2 rounded-sm overflow-hidden flex justify-center items-center mx-auto background_photo">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="pokemon-image"
                />
              </div>
              <Container>
                <div className="grid grid-cols-2 gap-3 text-center mb-2 rounded-md overflow-hidden bg-[#EE1515] border-[#FFCC00] border">
                  <div className="text-xl font-semibold bg-[#E5E5E5] statistic">
                    HP ❤: {pokemon.hp}
                  </div>
                  <div className="text-xl font-semibold bg-[#E5E5E5] statistic">
                    Attack ⚔: {pokemon.attack}
                  </div>
                  <div className="text-xl font-semibold bg-[#E5E5E5] statistic">
                    Defense 🛡: {pokemon.defense}
                  </div>
                  <div className="text-xl font-semibold bg-[#E5E5E5] statistic">
                    Speed 💨: {pokemon.speed}
                  </div>
                  <div className="text-xl font-semibold bg-[#E5E5E5] statistic">
                    Height 📏: {pokemon.height}
                  </div>
                  <div className="text-xl font-semibold bg-[#E5E5E5] statistic">
                    Weight ⚖: {pokemon.weight}
                  </div>
                </div>
                <div className="text-xl font-bold flex justify-center items-center bg-[#FFCC00] rounded-md mb-2 overflow-hidden border-[#EE1515] border p-1 type">
                  Type:{" "}
                  {pokemon.Types
                    ? pokemon.Types.map((typeObj) =>
                        renderTypeWithEmoji(typeObj.name)
                      ).join(", ")
                    : pokemon.types.map(renderTypeWithEmoji).join(", ")}
                </div>
              </Container>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
