import { Suspense } from "react";
import TopBanner from "@/app/components/TopBanner";
import SocialBar from "@/app/components/SocialBar";
import CategoriePageContent from "./CategoriePageContent";
import ContactSection from "./ContactSection";

function LoadingFallback() {
    return (
        <div style={{ backgroundColor: "#F8F6F2", minHeight: "400px" }} className="flex items-center justify-center">
            <p style={{ color: "#6B6B6B" }}>Chargement...</p>
        </div>
    );
}

export default function CategoriePage() {
    return (
        <div style={{ backgroundColor: "#F8F6F2" }}>
            <TopBanner />
            <SocialBar />
            
            <Suspense fallback={<LoadingFallback />}>
                <CategoriePageContent />
            </Suspense>
            
            <ContactSection />
        </div>
    );
}