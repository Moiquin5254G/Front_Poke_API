import { Container } from "@mui/material";
import "./Pokemons.css";

export default async function Pokemons({ className }) {
  const res = await fetch("http://localhost:3000/pokemons");
  const data = await res.json();

  return (
    <div className={className}>
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold p-7 text-center mb-6 bg-orange-600 rounded-lg">
          Pokemons
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer">
          {data.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-500"
            >
              <div className="text-3xl mb-2 p-2 flex justify-center items-center text-center font-bold bg-cyan-600 rounded-md">
                {pokemon.name}
              </div>
              <div className="mb-2 rounded-sm overflow-hidden flex justify-center items-center mx-auto background_photo">
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
              <Container>
                <div className="grid grid-cols-2 gap-3 text-center mb-2 rounded-md overflow-hidden bg-blue-800 border-slate-950 border">
                  <div className="text-xl font-semibold bg-slate-300">
                    HP ❤: {pokemon.hp}
                  </div>
                  <div className="text-xl font-semibold bg-slate-300">
                    Attack ⚔: {pokemon.attack}
                  </div>
                  <div className="text-xl font-semibold bg-slate-300">
                    Defense 🛡: {pokemon.defense}
                  </div>
                  <div className="text-xl font-semibold bg-slate-300">
                    Speed 💨: {pokemon.speed}
                  </div>
                  <div className="text-xl font-semibold bg-slate-300">
                    Height 📏: {pokemon.height}
                  </div>
                  <div className="text-xl font-semibold bg-slate-300">
                    Weight ⚖: {pokemon.weight}
                  </div>
                </div>
                <div className="text-xl font-semibold flex justify-center items-center bg-slate-300 rounded-md mb-2 overflow-hidden border-slate-950 border p-1">
                  Type:{" "}
                  {pokemon.Types
                    ? pokemon.Types.map((typeObj) => typeObj.name).join(", ")
                    : pokemon.types.join(", ")}{" "}
                </div>
              </Container>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
