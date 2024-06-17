import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import localFont from "next/font/local";

const clashGrotesl = localFont({
  src: "./clash-grotesk-semibold.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinsmen Carnival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clashGrotesl.className}>
        <div className="min-h-screen text-white bg-[url('/background.png')] bg-cover bg-center flex flex-col items-center pt-20 lg:pt-40">
          <div className="flex items-center text-5xl font-bold gap-8">
            <span className="hidden lg:block">Kinsmen</span>
            <Image
              src="/logo.png"
              alt="Kinsmen Carnival"
              width={300}
              height={300}
            />
            <span className="hidden lg:block">Carnival</span>
          </div>
          <h1 className="text-5xl font-bold lg:hidden pt-8 text-center">
            Kinsmen Carnival
          </h1>
          <span className="pt-4 font-bold">2024</span>
          {children}
        </div>
      </body>
    </html>
  );
}
