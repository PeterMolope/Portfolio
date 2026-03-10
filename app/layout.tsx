import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const jetBrainsMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter Molope Portfolio",
  description:
    " This project leverages the latest features of the Next.js ecosystem to provide a lightning-fast, SEO-optimized platform. By utilizing the App Router, React Server Components, and advanced caching strategies, the application ensures minimal client-side JavaScript while maintaining a highly interactive UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
