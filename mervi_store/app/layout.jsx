import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Mervi's Store",
    template: "%s | Mervi's Store",
  },
  description: "L’esthétique au service de votre image.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body
        className="
          min-h-screen 
          flex 
          flex-col 
          bg-[#F8F6F2] 
          text-[#2B2B2B] 
          antialiased
        "
      >
         {/* ON ENVELOPPE L’APP ICI */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}