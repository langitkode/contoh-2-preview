import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "contoh-2",
  description: "Quality & Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
