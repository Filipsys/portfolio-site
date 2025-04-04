import { PostHogProvider } from "@/providers/PostHogProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://filyys.dev"),
  title: "filyys - main page",
  description: "My simple, small, personal portfolio site",
  openGraph: {
    type: "website",
    title: "filyys - main page",
    siteName: "filyys - main page",
    description: "My simple, small, personal portfolio site",
    url: "https://filyys.dev",
    images: [{ url: "https://filyys.dev/fire.gif" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="My simple, small, personal portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="portfolio, personal, developer, software, Next.js, React, projects"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>filyys - main page</title>

        {/* <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" /> */}
      </head>
      <body className="bg-black antialiased">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
