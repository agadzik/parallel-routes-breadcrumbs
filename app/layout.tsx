import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vercel Header Example",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  breadcrumbs,
}: Readonly<{
  children: React.ReactNode;
  breadcrumbs: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header breadcrumbs={breadcrumbs} />
        <main>{children}</main>
      </body>
    </html>
  );
}
