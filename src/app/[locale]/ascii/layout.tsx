import "./ascii.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ascii @ filyys",
  description: "Click, click, click, click... Click.",
  openGraph: {
    type: "website",
    title: "ascii @ filyys",
    siteName: "ascii @ filyys",
    description: "Click, click, click, click... Click.",
    url: "https://filyys.dev/ascii",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="portfolio, personal, developer, software, Next.js, React, projects"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
