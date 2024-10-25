import "./globals.css";

export const metadata = {
  title: "Poke Api",
  description: "Web app for poke api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
