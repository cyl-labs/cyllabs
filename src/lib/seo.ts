import { Metadata } from 'next';

// Define the business information as a constant
export const BUSINESS = {
  legalName: "Cyllabs Pte. Ltd.",
  type: "Organization",
  streetAddress: "...",
  addressLocality: "Singapore",
  postalCode: "...",
  telephone: "+65 8197 7376",
  email: "cyllabsdigital@gmail.com",
  url: "https://cyllabs.com",
  sameAs: ["https://www.facebook.com/profile.php?id=61579388960071#", "https://www.instagram.com/cyl.labs/"],
  openingHours: ["Mo-Fr 00:00-24:00"]
};

// Define site-wide constants
export const SITE_NAME = "Cyllabs";
export const BASE_URL = "https://cyllabs.com";
export const DEFAULT_DESC = "Web development for Singapore SMEs. Cut Your Losses with cyllabs.";
export const DEFAULT_LOCALE = "en-SG";
export const SOCIAL_IMAGE_DEFAULT = "/og/default.png";
export const WHATSAPP_LINK = "https://wa.me/6587670797?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation";

/**
 * Generates an absolute URL by combining the base URL with a given path.
 * @param path - The path to append to the base URL.
 * @returns The absolute URL.
 */
export const absoluteUrl = (path: string): string => {
  return `${BASE_URL}${path}`;
};

/**
 * Builds the Open Graph and Twitter metadata for a page.
 * @param title - The title of the page.
 * @param description - The description of the page.
 * @param imageUrl - The URL of the image for social sharing.
 * @returns The Open Graph and Twitter metadata.
 */
export const buildOpenGraph = (title: string, description: string, imageUrl: string): Metadata => {
  return {
    openGraph: {
      title,
      description,
      url: BASE_URL,
      siteName: SITE_NAME,
      images: [
        {
          url: absoluteUrl(imageUrl),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: DEFAULT_LOCALE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(imageUrl)],
    },
  };
};

/**
 * Generates JSON-LD structured data for the organization.
 * @returns The JSON-LD script for the organization.
 */
export const jsonLdOrganization = () => {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": BUSINESS.type,
      "name": SITE_NAME,
      "legalName": BUSINESS.legalName,
      "url": BUSINESS.url,
      "logo": absoluteUrl("/icons/logo.png"),
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS.streetAddress,
        "addressLocality": BUSINESS.addressLocality,
        "postalCode": BUSINESS.postalCode,
        "addressCountry": "SG"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": BUSINESS.telephone,
        "contactType": "customer service"
      },
      "sameAs": BUSINESS.sameAs
    })
  };
};

/**
 * Generates JSON-LD structured data for the website.
 * @returns The JSON-LD script for the website.
 */
export const jsonLdWebsite = () => {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": BASE_URL,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    })
  };
};

/**
 * Generates JSON-LD structured data for breadcrumbs.
 * @param items - An array of breadcrumb items.
 * @returns The JSON-LD script for the breadcrumbs.
 */
export const jsonLdBreadcrumb = (items: { name: string; href: string }[]) => {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": absoluteUrl(item.href)
      }))
    })
  };
};