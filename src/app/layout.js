import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify",
  description: "Listen your best!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="bg-zinc-800 text-zinc-50">{children}</body>
    </html>
  );
}
