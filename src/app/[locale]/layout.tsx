import { NextIntlClientProvider, hasLocale } from "next-intl";
import { PostHogProvider } from "@/providers/PostHogProvider";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";

import type { Metadata } from "next";

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
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="My simple, small, personal portfolio site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="portfolio, personal, developer, software, Next.js, React, projects"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>filyys - main page</title>
      </head>
      <body className="antialiased">
        <PostHogProvider>
          <ThemeProvider attribute="data-mode">
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
