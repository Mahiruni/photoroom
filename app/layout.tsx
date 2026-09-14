import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sell at first sight — AI product visuals",
  description: "Create, edit and automate product visuals at scale with an AI-first commerce creative platform.",
  metadataBase: new URL("https://www.photoroom.com"),
  openGraph: { title: "Sell at first sight", description: "The future-ready product visual solution for e-commerce.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
