import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "filyys - main page",
  description: "My simple, small, personal portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="My simple, small, personal portfolio site" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>filyys - main page</title>

        {/* <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" /> */}
      </head>

      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
