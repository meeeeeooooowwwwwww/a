import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nataliegwinters.com"),
  title: "Natalie G. Winters - Author & Investigative Journalist",
  description: "Official website of Natalie G. Winters - Author, investigative journalist, and host covering politics, culture, and current events.",
  keywords: ["Natalie G Winters", "journalism", "politics", "culture", "current events", "9/11 files", "investigative reporting"],
  authors: [{ name: "Natalie G. Winters" }],
  openGraph: {
    title: "Natalie G. Winters - Author & Investigative Journalist",
    description: "Official website of Natalie G. Winters - Author, investigative journalist, and host covering politics, culture, and current events.",
    url: "https://nataliegwinters.com",
    siteName: "Natalie G. Winters",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natalie G. Winters - Author & Investigative Journalist",
    description: "Official website of Natalie G. Winters - Author, investigative journalist, and host covering politics, culture, and current events.",
    creator: "@NatalieGWinters",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-gray-800 overflow-x-hidden max-w-[100vw]">
        <div className="site-wrapper">
          <Header />
          <div className="relative pt-24 overflow-x-hidden">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
