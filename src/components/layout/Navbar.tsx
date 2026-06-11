"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../shared/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-gray-200 bg-white/70 backdrop-blur-xl">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Pentodoors
        </Link>

        {/* Desktop Navigation - Visible from 800px */}
        <nav className="hidden min-[800px]:flex items-center gap-8">
          <Link
            href="/products"
            className="transition-colors hover:text-gray-600"
          >
            Products
          </Link>

          <Link
            href="/projects"
            className="transition-colors hover:text-gray-600"
          >
            Projects
          </Link>

          <Link
            href="/services"
            className="transition-colors hover:text-gray-600"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="transition-colors hover:text-gray-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-colors hover:text-gray-600"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Quote Button */}
          <div className="hidden sm:block">
            <Button href="/contact">Get Quote</Button>
          </div>

          {/* Hamburger Menu - Visible below 800px */}
          <button
            className="min-[800px]:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="min-[800px]:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl shadow-lg">
          <nav className="container-custom flex flex-col py-4">
            <Link
              href="/products"
              className="py-3 transition-colors hover:text-gray-600"
              onClick={closeMobileMenu}
            >
              Products
            </Link>

            <Link
              href="/projects"
              className="py-3 transition-colors hover:text-gray-600"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>

            <Link
              href="/services"
              className="py-3 transition-colors hover:text-gray-600"
              onClick={closeMobileMenu}
            >
              Services
            </Link>

            <Link
              href="/about"
              className="py-3 transition-colors hover:text-gray-600"
              onClick={closeMobileMenu}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="py-3 transition-colors hover:text-gray-600"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}