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
import Script from "next/script";

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
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '9782648205100653');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1147543727241214&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
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
