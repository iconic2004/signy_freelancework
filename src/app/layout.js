import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://signy.in"),
  title: {
    default: "SIGNY — Enterprise Bulk SMS, WhatsApp Business API & Voice Solutions",
    template: "%s | Signy Solutions"
  },
  description: "We provide the best bulk messaging service to maximize your business marketing reach. Contact us now and reduce your high-cost campaigns.",
  keywords: [
    "Bulk SMS",
    "WhatsApp Business API",
    "Voice Calls",
    "Google Verified SMS",
    "RCS Messaging",
    "Chatbots",
    "Two-Way Communication",
    "Signy Solutions",
    "Enterprise Messaging India"
  ],
  authors: [{ name: "Signy Solutions India Pvt Ltd" }],
  creator: "Signy Solutions",
  publisher: "Signy Solutions",
  verification: {
    google: "ustVtATlJWWUwwA8a9iHuh_YV8yAPbr9SbmaK-IzrDM"
  },
  icons: {
    icon: [
      { url: "/images/favicon1.ico" },
      { url: "/images/favicon1.png", type: "image/png" }
    ],
    apple: [
      { url: "/images/favicon1.png" }
    ]
  },
  openGraph: {
    title: "SIGNY — Enterprise Bulk SMS, WhatsApp Business API & Voice Solutions",
    description: "Supercharge your marketing efforts with messaging campaigns designed for reach and engagement.",
    url: "https://signy.in",
    siteName: "Signy Solutions",
    images: [
      {
        url: "/images/logow.png",
        width: 1200,
        height: 630,
        alt: "Signy Solutions"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Signy Solutions India Pvt. Ltd.",
  "alternateName": "Signy",
  "url": "https://signy.in/",
  "logo": "https://signy.in/images/logow.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9167775222",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "Hindi", "Marathi"]
  },
  "sameAs": [
    "https://www.facebook.com/login/",
    "https://www.instagram.com/redfox.0804"
  ]
};

const jsonLdLocal = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Signy Solutions India Pvt. Ltd.",
  "image": "https://signy.in/images/logow.png",
  "@id": "https://signy.in/",
  "url": "https://signy.in/",
  "telephone": "+91-9167775222",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1609 Floor 16, 9, Business Bay Off, New Link Rd, behind Evershine Mall, Malad W",
    "addressLocality": "Mumbai",
    "postalCode": "400064",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1866,
    "longitude": 72.8364
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFBFC] text-[#0F172A] antialiased selection:bg-[#36BEA4]/20 selection:text-[#1B2A4A] relative">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />

        {/* Third Party Analytics & Tracking Scripts */}
        <Script
          src="https://analytics.alots.org/pixel/oLlfTOdiu4ZEZZJq"
          strategy="afterInteractive"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R2CB71SY8E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R2CB71SY8E');
          `}
        </Script>

        {/* Tawk.to Live Chat Script */}
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69451d3a6f5eb4197ab24daa/1jcqvkbrr';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
