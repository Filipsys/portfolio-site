import "../fun.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>terms @ filyys</title>
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
