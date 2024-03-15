import type { Metadata } from "next";

import Header from "@/components/Header/Header";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Izzy Beraja",
  description: "Izzy Beraja's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
