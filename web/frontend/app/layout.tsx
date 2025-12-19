import type { Metadata } from "next";
import "@/styles/global.css";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Visualisation Foundry",
  description: "Visualisation foundry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
