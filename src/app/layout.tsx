import type { Metadata } from "next";
import type { ReactNode } from "react";
import Widget from "./Widget";

import "./globals.css";

export const metadata: Metadata = {
  title: "Live Dashboard Demo",
  description: "Minimal Next.js dashboard template for live coding demos.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Widget />
      </body>
    </html>
  );
}
