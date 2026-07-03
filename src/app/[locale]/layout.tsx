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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const metadataByLocale = {
  es: {
    title: "Leonardo Gonzalez | Desarrollador Web",
    description: "Soy desarrollador web. Portfolio con proyectos y experiencia en desarrollo de sitios y aplicaciones web.",
    openGraphLocale: "es_AR",
  },
  en: {
    title: "Leonardo Gonzalez | Web Developer",
    description: "I am a web developer. Portfolio with projects and experience building websites and web applications.",
    openGraphLocale: "en_US",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content =
    metadataByLocale[locale as keyof typeof metadataByLocale] ??
    metadataByLocale.en;

  return {
    metadataBase: new URL(siteUrl),
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      siteName: "Leonardo Web Portfolio",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
      locale: content.openGraphLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: ["/og-image.jpg"],
    },
  };
}

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
    <html lang={locale}>
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