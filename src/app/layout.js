import "./reference.css";
import "./globals.css";
import Header from "@/components/Header";
import HoverEffects from "@/components/HoverEffects";
import Content from "@/components/Content";
import StructuredData from "@/components/StructuredData";
import footer from "@/content/footer.json";
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
      "geo.region": ["IN", "SA"],
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
        <Content html={footer.html} />
      </body>
    </html>
  );
}
