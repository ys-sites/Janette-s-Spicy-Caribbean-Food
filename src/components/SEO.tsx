import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/hero-bg.jpg', 
  url = 'https://janettesspicy.com' 
}) => {
  const { t, i18n } = useTranslation();
  
  const siteName = "Janette's Spicy Caribbean Food";
  const defaultTitle = t('hero.title') + " | " + siteName;
  const defaultDescription = t('about.description1');
  
  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteName,
    "image": [
      "https://janettesspicy.com/hero-bg.jpg",
      "https://janettesspicy.com/jerk-chicken-portions.jpg",
      "https://janettesspicy.com/patty.jpg"
    ],
    "@id": "https://janettesspicy.com",
    "url": "https://janettesspicy.com",
    "telephone": "+15146834741",
    "priceRange": "$$",
    "menu": "https://janettesspicy.com/#menu",
    "servesCuisine": "Caribbean, Jamaican",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5B Av. 3e S",
      "addressLocality": "Roxboro",
      "addressRegion": "QC",
      "postalCode": "H8Y 2L3",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.5088,
      "longitude": -73.8083
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday", "Friday"],
        "opens": "12:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "13:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/p/Janettes-Spicy-Caribbean-Food-100090978391538/"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <html lang={i18n.language} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
