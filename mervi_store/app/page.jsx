// app/page.jsx  →  Server Component
import TopBanner from "@/app/components/TopBanner";
import SocialBar from "@/app/components/SocialBar";
import HeroSection from "@/app/components/HeroSection";
import CTAHome1 from "@/app/components/CTAHome1";
import CollectionPage from "@/app/collection/collection";
import AboutPage from "@/app/A-propos/page";
import FeaturedProducts from "@/app/ProduitDisponible/page";
import Footer from "@/app/footer/page";


export default function Home() {
  return (
    <>
      <TopBanner />
      <SocialBar />
      <CTAHome1 />
      <HeroSection />
      <CollectionPage />
      <AboutPage />
      <FeaturedProducts />
      <Footer />
    </>
  );
}


// Couleur premium vert sauge