"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10"
      style={{ backgroundColor: "#2B2B2B" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ───────────── Top Footer ───────────── */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand + Description */}
          <div>
            <h2
              className="text-3xl font-light tracking-wide"
              style={{ color: "#F8F6F2" }}
            >
              Mervi<span style={{ color: "#7A8B7A" }}>'</span>s
            </h2>

            <p
              className="mt-6 text-sm leading-relaxed"
              style={{ color: "#D8D3CC" }}
            >
              Nous proposons des solutions esthétiques pour valoriser
              votre image et sublimer vos espaces professionnels et résidentiels.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-4 mt-6">
              {[
                {
                  Icon: FaFacebookF,
                  label: "Mervi's",
                  link: "https://facebook.com/Mervi's",
                },
                {
                  Icon: FaInstagram,
                  label: "sandra_merveille__",
                  link: "https://instagram.com/sandra_merveille__",
                },
                {
                  Icon: FaWhatsapp,
                  label: "+237 697 02 50 90",
                  link: "https://wa.me/237697025090",
                },
              ].map(({ Icon, label, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 w-fit transition-all duration-300"
                  style={{ color: "#D8D3CC" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F8F6F2";
                    const iconBox =
                      e.currentTarget.querySelector(".social-icon-box");
                    if (iconBox) iconBox.style.backgroundColor = "#5F6E5F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D8D3CC";
                    const iconBox =
                      e.currentTarget.querySelector(".social-icon-box");
                    if (iconBox) iconBox.style.backgroundColor = "#7A8B7A";
                  }}
                >
                  <span
                    className="social-icon-box flex items-center justify-center w-9 h-9 transition-all duration-300"
                    style={{
                      backgroundColor: "#7A8B7A",
                      color: "#F8F6F2",
                      borderRadius: "9999px",
                    }}
                  >
                    <Icon size={16} />
                  </span>

                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm uppercase tracking-widest mb-6"
              style={{ color: "#7A8B7A" }}
            >
              Navigation
            </h4>

            <ul className="space-y-3">
              {["À propos", "Services", "Projets", "Collections", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="transition-colors duration-300 text-sm"
                      style={{ color: "#D8D3CC" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#7A8B7A")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#D8D3CC")
                      }
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4
              className="text-sm uppercase tracking-widest mb-6"
              style={{ color: "#7A8B7A" }}
            >
              Collections
            </h4>

            <ul className="space-y-3">
              {[
                "Plaques Publicitaires",
                "Alucobond",
                "Décoration Intérieure",
                "Mobilier Design",
                "Signalétique",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors duration-300 text-sm"
                    style={{ color: "#D8D3CC" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#7A8B7A")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#D8D3CC")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div
            className="p-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              borderRadius: "20px",
            }}
          >
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: "#7A8B7A" }} />
                <p style={{ color: "#D8D3CC" }}>
                  Carrefour Ange Raphaël, <br />
                  Douala, Cameroun
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: "#7A8B7A" }} />
                <p style={{ color: "#D8D3CC" }}>
                  sniemedjie50@gmail.com
                </p>
              </div>
{/* 
              <div className="flex items-center gap-3">
                <Phone size={18} style={{ color: "#7A8B7A" }} />
                <p style={{ color: "#D8D3CC" }}>
                  +237 697 025 090
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* ───────────── Bottom Bar ───────────── */}
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "#D8D3CC",
          }}
        >
          <p>© {new Date().getFullYear()} Mervi's Store</p>
          <p>Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}