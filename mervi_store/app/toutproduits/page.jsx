import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    const products = [
        {
            id: 1,
            title: "Panneaux Publicitaires",
            image:
                "/images/img32.png",
        },
        {
            id: 2,
            title: "Plaques Publicitaires",
            image:
                "/images/img3.png",
        },
        {
            id: 3,
            title: "Revêtement Alucobond",
            image:
                "/images/img9.png",
        },
        {
            id: 4,
            title: "Décoration Intérieure",
            image:
                "/images/img30.png",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F8F6F2] text-[#2B2B2B]">
            <Link href="/">
                <button className="bg-[#7A8B7A] hover:bg-[#687868] transition-all duration-300 text-white px-8 py-4 rounded-full text-sm tracking-wide shadow-lg fixed top-4 left-4 z-50">
                    retour
                </button>
            </Link>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden py-28 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="uppercase tracking-[0.3em] text-sm text-[#7A8B7A] mb-4">
                            Excellence & Élégance
                        </p>

                        <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
                            Nos Produits
                            <span className="block text-[#7A8B7A] mt-2">
                                Haut de Gamme
                            </span>
                        </h1>

                        <p className="text-lg leading-8 text-[#555] max-w-xl mb-8">
                            Découvrez une sélection de produits premium conçus pour donner une
                            image moderne, professionnelle et élégante à votre entreprise ou
                            votre intérieur.
                        </p>

                        <button className="bg-[#7A8B7A] hover:bg-[#687868] transition-all duration-300 text-white px-8 py-4 rounded-full text-sm tracking-wide shadow-lg">
                            Explorer les produits
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[#7A8B7A]/10 rounded-[40px] blur-3xl"></div>

                        <Image
                            width={600}
                            height={420}
                            src="/images/img3.png"
                            alt="Produits publicitaires"
                            className="relative rounded-[40px] h-[600px] w-full object-cover shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* PRODUCTS SECTION */}
            {/* PRODUCTS GRID */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* PRODUCTS GRID */}
                    <div
                        className="
        grid
        gap-8
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
      "
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group"
                            >
                                {/* IMAGE */}
                                <div className="relative w-full h-[320px] bg-white border border-[#dcdcdc] overflow-hidden">
                                    <Image
                                        width={400}
                                        height={400}
                                        src={product.image}
                                        alt={product.title}
                                        className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition
            duration-500
          "
                                    />
                                </div>

                                {/* INFO */}
                                <div className="mt-4">

                                    {/* TITLE */}
                                    <p className="text-[15px] text-gray-800 truncate">
                                        {product.title}
                                    </p>

                                    {/* DESCRIPTION */}
                                    <p className="text-[14px] text-gray-600 mt-2 leading-6 line-clamp-2">
                                        {product.description}
                                    </p>

                                    {/* BUTTON */}
                                    <button
                                        className="
            mt-4
            bg-[#7A8B7A]
            hover:bg-[#5F6E5F]
            text-white
            px-6
            h-10
            text-sm
            w-full
            flex
            items-center
            justify-center
            gap-2
            transition
            duration-300
          "
                                    >
                                        {/* Plus Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>

                                        Voir le produit
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PREMIUM CTA */}
            <section className="px-6 pb-24 mt-20">
                <div className="max-w-7xl mx-auto bg-[#7A8B7A] rounded-[40px] overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/10"></div>

                    <div className="relative grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-16">
                        <div>
                            <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-4">
                                Sur Mesure
                            </p>

                            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                                Donnez Vie À
                                <span className="block">Vos Projets</span>
                            </h2>

                            <p className="text-white/80 leading-8 mb-8 max-w-xl">
                                Nous concevons des solutions personnalisées adaptées à votre
                                activité, votre espace et votre identité visuelle.
                            </p>

                            <button className="bg-white text-[#2B2B2B] hover:bg-[#F5F5F5] px-8 py-4 rounded-full transition duration-300 text-sm tracking-wide">
                                Nous contacter
                            </button>
                        </div>

                        <div>
                            <Image
                                width={600}
                                height={420}
                                src="/images/hero1.png"
                                alt="Décoration intérieure"
                                className="rounded-[30px] h-[420px] w-full object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
