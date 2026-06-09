import "./globals.css";

export const metadata = {
  title: "Maison Élise | Exclusive Women's Fashion",
  description:
    "Curated women's fashion pieces for quiet luxury, crafted across Paris, Milan, and Kyoto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
