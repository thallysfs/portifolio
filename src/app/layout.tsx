import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thallysfs.github.io/portifolio"),
  title: {
    default: "Thallys de Freitas Soares — Engenheiro de Software Fullstack",
    template: "%s · Thallys de Freitas Soares",
  },
  description:
    "Engenheiro de Software Fullstack com 5+ anos de experiência em React, Next.js, Node.js e .NET Core. Especialista em interfaces modernas, performáticas e escaláveis.",
  authors: [{ name: "Thallys de Freitas Soares" }],
  creator: "Thallys de Freitas Soares",
  keywords: [
    "Engenheiro de Software",
    "Fullstack",
    "Frontend",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfólio",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://thallysfs.github.io/portifolio",
    siteName: "Thallys de Freitas Soares",
    title: "Thallys de Freitas Soares — Engenheiro de Software Fullstack",
    description:
      "Engenheiro de Software Fullstack com 5+ anos de experiência em React, Next.js, Node.js e .NET Core.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Thallys de Freitas Soares — Engenheiro de Software Fullstack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thallys de Freitas Soares — Engenheiro de Software Fullstack",
    description:
      "Engenheiro de Software Fullstack com 5+ anos de experiência em React, Next.js, Node.js e .NET Core.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
          >
            Pular para o conteúdo
          </a>
          <Navbar />
          <main id="main" className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
