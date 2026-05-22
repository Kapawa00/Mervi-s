"use client";

export default function ContactSection() {
    return (
        <section
            className="py-20 mt-24"
            style={{ backgroundColor: "#FFFFFF" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:flex gap-16">

                <div className="lg:w-1/2 space-y-6">
                    <h3
                        className="uppercase tracking-widest text-sm"
                        style={{ color: "#7A8B7A" }}
                    >
                        Contact
                    </h3>

                    <h2
                        className="text-3xl font-semibold"
                        style={{ color: "#2B2B2B" }}
                    >
                        Parlons de votre projet
                    </h2>

                    <p style={{ color: "#6B6B6B" }}>
                        Nous sommes à votre écoute pour répondre à toutes vos questions.
                    </p>
                </div>

                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Nom complet"
                            className="w-full px-4 py-3 border rounded-md"
                            style={{ borderColor: "#D8D3CC" }}
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border rounded-md"
                            style={{ borderColor: "#D8D3CC" }}
                        />

                        <textarea
                            placeholder="Message"
                            className="w-full px-4 py-3 h-32 border rounded-md"
                            style={{ borderColor: "#D8D3CC" }}
                        />

                        <button
                            className="w-full py-3 text-white font-medium transition duration-300"
                            style={{ backgroundColor: "#7A8B7A" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = "#5F6E5F")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor = "#7A8B7A")
                            }
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
            <footer />
        </section>
    );
}
