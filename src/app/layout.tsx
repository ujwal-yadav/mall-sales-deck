import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mall of America | The Nation's Largest Destination",
  description:
    "520+ stores. 32 million annual visitors. $3B+ economic impact. Explore leasing, sponsorship, and event opportunities at America's premier retail and entertainment destination.",
  keywords: [
    "Mall of America",
    "retail leasing",
    "sponsorship",
    "event venue",
    "Bloomington Minnesota",
    "shopping destination",
  ],
  openGraph: {
    title: "Mall of America | The Nation's Largest Destination",
    description:
      "Explore leasing, sponsorship, and event opportunities at America's premier retail and entertainment destination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
