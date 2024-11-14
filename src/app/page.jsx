import Welcome from "@/components/Welcomen";
import PokemonDay from "@/components/PokemonDay";

export const metadata = {
  title: "Poke Api",
  description: "Web app for poke api",
};

/**
 * Componente Home que renderiza la página de inicio de la aplicación.
 * Contiene un mensaje de bienvenida y un componente que muestra un
 * Pokémon aleatorio cada vez que se carga la página.
 *
 * @returns {JSX.Element} La página de inicio.
 */

export default function Home() {
  return (
    <div>
      <Welcome />
      <PokemonDay />
    </div>
  );
}
