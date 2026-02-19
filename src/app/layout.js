import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Forge Frame",
  description:
    "Forge Frame is a specialized web studio crafting high-performance, immersive websites for video game projects, studios, and online servers.",
  openGraph: {
    title: "Forge Frame",
    description:
      "We design and develop immersive, SEO-optimized websites tailored for video game studios, indie developers, and gaming communities.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  if (!localTheme) localTheme = systemTheme;
                  document.documentElement.setAttribute('data-theme', localTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
