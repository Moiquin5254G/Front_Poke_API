import Pokemons from "@/components/Pokemons";
import "./page.css";

export const metadata = {
  title: "Poke Api",
  description: "Web app for poke api",
};

export default function Page() {
  return <Pokemons className="image_background" />;
}
