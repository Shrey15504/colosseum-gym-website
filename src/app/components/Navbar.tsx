import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Trainers", href: "#trainers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(13,12,11,0.97)"
          : "linear-gradient(to bottom, rgba(13,12,11,0.9) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,160,71,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 flex items-center justify-center border"
            style={{ borderColor: "#C9A047", background: "rgba(201,160,71,0.08)" }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#C9A047",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              C
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#F0EDE6",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                lineHeight: 1.1,
              }}
            >
              COLOSSEUM
            </div>
            <div
              style={{
                color: "#C9A047",
                fontSize: "10px",
                letterSpacing: "0.3em",
                lineHeight: 1,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              GYM · MATUNGA EAST
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-200"
              style={{
                color: "#8C8078",
                fontSize: "12px",
                letterSpacing: "0.12em",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#C9A047")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#8C8078")
              }
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 transition-all duration-200"
            style={{
              background: "#C9A047",
              color: "#0D0C0B",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "#DEB96A")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "#C9A047")
            }
          >
            JOIN NOW
          </a>
          <button
            className="lg:hidden p-2"
            style={{ color: "#F0EDE6" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-2"
          style={{ background: "rgba(13,12,11,0.98)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 border-b transition-colors duration-200"
              style={{
                color: "#8C8078",
                borderColor: "rgba(201,160,71,0.1)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center py-3"
            style={{
              background: "#C9A047",
              color: "#0D0C0B",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            JOIN NOW
          </a>
        </div>
      )}
    </nav>
  );
}
