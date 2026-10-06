import "./reference.css";
import "./globals.css";
import Header from "@/components/Header";
import Content from "@/components/Content";
import footer from "@/content/footer.json";

export const metadata = {
  title: "Cypher Capital | Bridging capital with frontier opportunities",
  description:
    "Institutional asset management and proprietary investment across digital markets and AI data-centre infrastructure, headquartered in Zurich with a presence in Dubai.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="instrument_sans_f5a7536e-module__HLg-pG__variable"
    >
      <body>
        <Header />
        {children}
        <Content html={footer.html} />
      </body>
    </html>
  );
}
