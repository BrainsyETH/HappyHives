import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Hives | Fresh Missouri Honey",
  description:
    "Saving the bees one happy hive at a time. Fresh, raw honey from our Missouri bee farm. A beekeeping duo crafting nature's sweetest gift.",
  keywords: ["honey", "raw honey", "Missouri honey", "beekeeping", "happy hives", "bee farm"],
  openGraph: {
    title: "Happy Hives | Fresh Missouri Honey",
    description: "Saving the bees one happy hive at a time. Fresh, raw honey from our Missouri bee farm.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
