import styles from "./globals.css?url";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>portfolio site @ filyys</title>

      <link rel="manifest" href="/manifest.json" />
      <link rel="modulepreload" href="/src/client.tsx" />
      <link rel="stylesheet" href={styles} />
    </head>
    <body style={{ backgroundColor: "black" }}>
      <div id="root">{children}</div>

      <script>import("/src/client.tsx")</script>
    </body>
  </html>
);
