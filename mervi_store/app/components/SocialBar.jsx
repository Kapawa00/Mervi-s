// components/SocialBar.jsx
"use client";

import { Heart, Phone, Search, ShoppingBag, User } from "lucide-react";

const socialStyle  = { color: "#7A8B7A" };
const socialHover  = "#5F6E5F";
const socialDefault = "#7A8B7A";

const iconStyle    = { color: "#6B6B6B" };
const iconHover    = "#5F6E5F";
const iconDefault  = "#6B6B6B";

const utilIcons = [
  { Icon: Search,      label: "Recherche" },
  { Icon: Heart,       label: "Favoris"   },
  { Icon: User,        label: "Compte"    },
  { Icon: ShoppingBag, label: "Panier"    },
];

export default function SocialBar() {
  return (
    <div
      style={{
        backgroundColor: "#EFEAE3",
        borderBottom: "1px solid #D8D3CC",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 md:px-8 flex items-center justify-between">

        {/* ── Gauche : réseaux sociaux ── */}
        <div className="flex items-center gap-x-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/237697025090"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
            style={socialStyle}
            onMouseEnter={e => (e.currentTarget.style.color = socialHover)}
            onMouseLeave={e => (e.currentTarget.style.color = socialDefault)}
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/Mervi's"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
            style={socialStyle}
            onMouseEnter={e => (e.currentTarget.style.color = socialHover)}
            onMouseLeave={e => (e.currentTarget.style.color = socialDefault)}
          >
            <svg
              width={20}
              height={20}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M22.5 12.063c0-5.799-4.702-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.24 3.84 9.584 8.86 10.373v-7.337H7.692v-3.037h2.666V9.75c0-2.63 1.568-4.085 3.966-4.085 1.15 0 2.351.205 2.351.205v2.584h-1.324c-1.304 0-1.712.81-1.712 1.64v1.97h2.912l-.465 3.036H13.64v7.337c5.02-.788 8.859-5.131 8.859-10.373Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/sandra_merveille__"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
            style={socialStyle}
            onMouseEnter={e => (e.currentTarget.style.color = socialHover)}
            onMouseLeave={e => (e.currentTarget.style.color = socialDefault)}
          >
            <svg
              width={20}
              height={20}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.375 3.25a4.388 4.388 0 0 1 4.375 4.375v8.75a4.388 4.388 0 0 1-4.375 4.375h-8.75a4.389 4.389 0 0 1-4.375-4.375v-8.75A4.388 4.388 0 0 1 7.625 3.25h8.75Zm0-1.75h-8.75C4.256 1.5 1.5 4.256 1.5 7.625v8.75c0 3.369 2.756 6.125 6.125 6.125h8.75c3.369 0 6.125-2.756 6.125-6.125v-8.75c0-3.369-2.756-6.125-6.125-6.125Z" />
              <path d="M17.688 7.625a1.313 1.313 0 1 1 0-2.625 1.313 1.313 0 0 1 0 2.625Z" />
              <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z" />
            </svg>
          </a>
        </div>

        {/* ── Droite : icônes utilitaires ── */}
        <div className="flex items-center gap-x-5">
          {utilIcons.map(({ Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="transition-colors duration-150 cursor-pointer bg-transparent border-none p-0"
              style={iconStyle}
              onMouseEnter={e => (e.currentTarget.style.color = iconHover)}
              onMouseLeave={e => (e.currentTarget.style.color = iconDefault)}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}