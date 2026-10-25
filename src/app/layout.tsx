import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portad.vishmuka.in"),
  title: {
    default: "PortaD — the open way to move your data",
    template: "%s · PortaD",
  },
  description:
    "Local-first, verifiable SaaS workspace migrations: export, validate, transform and import with checksums, resumable checkpoints and a round-trip diff.",
  applicationName: "PortaD",
  openGraph: {
    type: "website",
    siteName: "PortaD",
    title: "PortaD — the open way to move your data",
    description:
      "Local-first, verifiable SaaS workspace migrations with checksums, resumable checkpoints and a round-trip diff.",
    url: "https://portad.vishmuka.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "PortaD — the open way to move your data",
    description:
      "Local-first, verifiable SaaS workspace migrations with a round-trip diff.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050d1f" },
  ],
  colorScheme: "dark light",
};

const themeInitScript = `(function(){try{var s=localStorage.getItem('portad-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;if(d){r.classList.add('dark');r.classList.remove('light');}else{r.classList.add('light');r.classList.remove('dark');}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}