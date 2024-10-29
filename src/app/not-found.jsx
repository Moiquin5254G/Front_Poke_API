import Link from "next/link";
import { Button } from "@mui/material";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center bg-[#000000] min-h-screen w-full text-white pt-20">
      <div className="font-bold text-3xl text-center mb-10">Página no encontrada</div>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button className="bg-[#FFCC00] mt-10">Volver al inicio</Button>
      </Link>
    </div>
  );
}
