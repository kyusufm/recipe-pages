import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"], weight:["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Recipe pages challenge",
  description: "Recipe pages challenge solution by kyusufm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />

      <title>Recipe page by kyusufm</title>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
