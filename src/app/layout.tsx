import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Adjusted import path
import Footer from "@/components/Footer"; // Adjusted import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consulting Firm - Project Management, Business & Risk Consulting", // Basic SEO Title
  description: "Expert consulting services in project management, business strategy, and risk management. Available in English and Romanian.", // Basic SEO Description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* Default language */} 
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

