import "../styles/globals.scss";
import "../styles/variables.css";

export const metadata = {
  title: "Jungle Gym",
  description: "Jungle Gym training course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
