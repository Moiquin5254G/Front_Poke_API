import Link from "next/link";
import "./Header.css";

/**
 * Componente Header de la aplicación.
 * Contiene enlaces a la página de inicio y a la página de Pokémon,
 * junto con una imagen de logo.
 *
 * @async
 * @returns {JSX.Element} El componente header renderizado.
 */
export default async function Header() {
  return (
    <header className="header">
      <Link href="/">
        <img src="/LogoPng.png" alt="Home" className="logo" />
      </Link>
      <Link href="/pokemons" className="link">
        Pokemons
      </Link>
    </header>
  );
}
