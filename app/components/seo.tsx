import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateSEOMetadata({
  title = "Paylock - Secure Escrow Services for Digital Transactions",
  description = "Protect your digital transactions with Paylock's secure escrow services. Trusted by thousands of businesses worldwide for safe, reliable payment processing.",
  keywords = [
    "escrow",
    "secure payments",
    "digital transactions",
    "payment protection",
    "online escrow",
    "secure transactions",
  ],
  image = "/og-image.png",
  url = "https://paylock.com",
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: SEOProps = {}): Metadata {
  const siteName = "Paylock";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: author ? [{ name: author }] : [{ name: "Paylock Team" }],
    creator: "Paylock",
    publisher: "Paylock",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: type === "product" ? "website" : type,
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@paylock",
      site: "@paylock",
    },
    alternates: {
      canonical: url,
    },
    category: section || "Technology",
  };
}

export function generateStructuredData({
  type = "Organization",
  name = "Paylock",
  description = "Secure escrow services for digital transactions",
  url = "https://paylock.com",
  logo = "https://paylock.com/logo.png",
  contactPoint,
  sameAs = [
    "https://twitter.com/paylock",
    "https://linkedin.com/company/paylock",
    "https://github.com/paylock",
  ],
  address,
  foundingDate = "2020",
  employees = "51-200",
  industry = "Financial Technology",
}: any = {}) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
      width: 400,
      height: 400,
    },
    sameAs,
    foundingDate,
    numberOfEmployees: employees,
    industry,
    ...(contactPoint && { contactPoint }),
    ...(address && { address }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseStructuredData),
      }}
    />
  );
}
