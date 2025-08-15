import { DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import {
  SITE_NAME,
  DEFAULT_DESC,
  BASE_URL,
  SOCIAL_IMAGE_DEFAULT,
  jsonLdOrganization,
  jsonLdWebsite,
} from "@/lib/seo";
import { Metadata } from "next";

const dmSans = DM_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESC,
    url: BASE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: SOCIAL_IMAGE_DEFAULT,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: "en-SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESC,
    images: [SOCIAL_IMAGE_DEFAULT],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${dmSans.className} antialiased leading-none tracking-[-0.08em]`}
      >
        <div className="relative z-10">{children}</div>
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdOrganization()}
          id="json-ld-organization"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdWebsite()}
          id="json-ld-website"
        />
      </body>
    </html>
  );
}
