import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trey Education | Teacher & School Support",
  description: "Enhancing independent school success through coaching, partnership, and high-impact support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/trey_icon.jpeg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
