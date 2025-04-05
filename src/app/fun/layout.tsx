import "../globals.css";

import Metadata from "next";

export const metadata: Metadata = {
  title: "fun site!!! @ filyys",
  description: "Get on and rock over cause this is a massive journey. Let the fun begin!!!",
  openGraph: {
    type: "website",
    title: "fun site!!! @ filyys",
    siteName: "fun site!!! @ filyys",
    description: "Get on and rock over cause this is a massive journey. Let the fun begin!!!",
    url: "https://filyys.dev/fun",
    images: [{ url: "https://filyys.dev/fire.gif" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Get on and rock over cause this is a massive journey. Let the fun begin!!!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="portfolio, personal, developer, software, Next.js, React, projects"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>fun site!!! @ filyys</title>
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
