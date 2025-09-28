import "../styles/globals.scss";
import "../styles/variables.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Jungle Gym Academy</title>

        <meta
          name="description"
          content="Jungle Gym Academy – Training in boxing, Muay Thai, MMA, no-gi Brazilian Jiu-Jitsu, and fitness for all levels."
        />

        {/* Open Graph (Facebook & others) */}
        <meta property="og:title" content="Jungle Gym Academy" />
        <meta property="og:url" content="https://www.junglegymacademy.com" />
        <meta property="og:site_name" content="Jungle Gym Academy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Train in boxing, Muay Thai, MMA, no-gi BJJ, and fitness with expert coaches in a welcoming, high-energy environment."
        />
        <meta property="og:image" content="/JGA-social-image.png" />
        <meta property="og:image:secure_url" content="/JGA-social-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jungle Gym Academy" />
        <meta
          name="twitter:description"
          content="Boxing, Muay Thai, MMA, no-gi BJJ & fitness. Join Jungle Gym Academy and push your limits."
        />
        <meta name="twitter:image" content="/JGA-social-image.png" />

        {/* SEO */}
        <meta
          name="keywords"
          content="Jungle Gym Academy, boxing, Muay Thai, MMA, BJJ, no-gi, fitness, combat sports, training"
        />
        <meta name="theme-color" content="#000000" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
