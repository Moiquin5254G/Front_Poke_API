import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Poke Api",
  description: "Web app for poke api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
