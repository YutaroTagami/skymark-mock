import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
  weight: ["400", "600"],
  style: "normal",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "スカイマーク株式会社様 - モックアップサイト",
  description: "SPOTアサインシステム",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    noimageindex: true,
    nosnippet: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={noto.className}>
          {children}
        </body>
      </html >
    </>
  );
}
