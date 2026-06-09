import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Maison Élise | Exclusive Women's Fashion",
  description:
    "Curated women's fashion pieces for quiet luxury, crafted across Paris, Milan, and Kyoto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="/bildit-cms-script-dev.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
