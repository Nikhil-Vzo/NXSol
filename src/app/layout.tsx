import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NXSol | Next-Generation Solutions",
  description: "Experience the future of digital excellence with NXSol. Premium design, seamless performance, and innovative technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
