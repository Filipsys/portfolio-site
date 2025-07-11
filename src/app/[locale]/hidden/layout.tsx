import "./hidden.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "help help please help",
  description: "help please please i do not have much time much time much time",
  openGraph: {
    type: "website",
    title: "much time much time much time much",
    siteName: "much time much",
    description:
      "help please please i do not have much time much time much time",
    url: "https://filyys.dev/hidden",
    images: [{ url: "" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="help please please i do not have much time much time much time"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="portfolio, personal, developer, software, Next.js, React, projects"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>please help me i do not have much time left</title>
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
