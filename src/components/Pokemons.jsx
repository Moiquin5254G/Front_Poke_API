export default async function Pokemons({ className }) {
  const res = await fetch("http://localhost:3000/pokemons");
  const data = await res.json();

  return (
    <div className={className}>
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold p-7 text-center mb-6 bg-orange-600 rounded-lg">Pokemons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer">
        {data.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-500"
          >
            <div className="text-3xl mb-2 flex justify-center items-center text-center font-bold bg-cyan-600 rounded-md">
              {pokemon.name}
            </div>
            <div className="mb-2 rounded-sm overflow-hidden w-32 flex justify-center items-center mx-auto">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="text-xl font-semibold">HP: {pokemon.hp}</div>
            <div className="text-xl font-semibold">Attack: {pokemon.attack}</div>
            <div className="text-xl font-semibold">
              Defense: {pokemon.defense}
            </div>
            <div className="text-xl font-semibold">Speed: {pokemon.speed}</div>

            {/* Renderización de los tipos */}
            <div className="text-xl font-semibold">
              Type:{" "}
              {pokemon.Types
                ? pokemon.Types.map((typeObj) => typeObj.name).join(", ") // Si es de la base de datos
                : pokemon.types.join(", ")}{" "}
              {/* Si es de la API */}
            </div>

            <div className="text-xl font-semibold">Height: {pokemon.height}</div>
            <div className="text-xl font-semibold">Weight: {pokemon.weight}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
