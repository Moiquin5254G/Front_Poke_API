import "./Welcomen.css";

/**
 * Componente Welcome que da la bienvenida al usuario a la Pokédex Interactiva.
 * Presenta un título y un párrafo de texto que invita al usuario a explorar la colección de cartas de Pokémon.
 */

export default async function Welcome() {
  return (
    <div className="welcome-message">
      <h1 className="text-4xl font-bold text-center mb-4">
        Bienvenidos a la Pokédex Interactiva
      </h1>
      <p className="text-lg text-center">
        Explora una extensa colección de cartas de Pokémon, encuentra tus
        favoritos, y descubre más sobre cada uno. ¡Busca, filtra, y disfruta de
        la diversidad de la colección de Pokémon única!
      </p>
    </div>
  );
}
