import "./reference.css";
import "./price-intelligence.css";
import "./globals.css";
import Header from "@/components/Header";
import HoverEffects from "@/components/HoverEffects";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import {
  ORGANIZATION_DESCRIPTION,
  SITE_URL,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/uxhub_logo.svg", apple: "/uxhub_logo.svg" },
  title: "Software Development Company in India & Saudi Arabia | UX Hub",
  description: ORGANIZATION_DESCRIPTION,
  applicationName: "UX Hub",
  authors: [{ name: "UX Hub", url: SITE_URL }],
  creator: "UX Hub",
  publisher: "UX Hub",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "geo.region": ["IN-KL", "SA-01"],
      "geo.placename": ["Kochi, India", "Riyadh, Saudi Arabia"],
      "geo.position": ["9.9312;76.2673", "24.7136;46.6753"],
      ICBM: ["9.9312, 76.2673", "24.7136, 46.6753"],
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="instrument_sans_f5a7536e-module__HLg-pG__variable"
    >
      <body>
        <StructuredData data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <HoverEffects />
        {children}
        <Footer />
      </body>
    </html>
  );
}
