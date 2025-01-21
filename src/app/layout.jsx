import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

const OvoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Zohar Yevelkin",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${OutfitFont.className} ${OvoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
