import '@/styles/global.css';
import { inter } from '@/app/ui/fonts';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <p>Dashboard Layout</p>
        <nav>
            <NavLinks />
        </nav>
        {children}
      </body>
    </html>
  );
}
