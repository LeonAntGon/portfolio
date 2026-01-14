import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  metadataBase: new URL(
    process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "http://localhost:3000"
  ),

  title: "Leonardo's Portfolio",
  description: "This is my portfolio",

  openGraph: {
    title: "Leonardo's Portfolio",
    description: "Check out my latest projects and skills.",
    siteName: "Leonardo's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Leonardo's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Leonardo's Portfolio",
    description: "This is my portfolio",
    images: ["/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any
}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages()
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          {children}
          <Analytics/>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}