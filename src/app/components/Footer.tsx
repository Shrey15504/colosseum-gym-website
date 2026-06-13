import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Trainers", href: "#trainers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const disciplines = [
  "CrossFit",
  "Kickboxing",
  "Personal Training",
  "Functional Training",
  "Weight Training",
  "Prowler Sled",
  "Sports Enhancement",
  "Adult Sports",
];

export function Footer() {
  return (
    <footer style={{ background: "#0A0908", borderTop: "1px solid rgba(201,160,71,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{ border: "1px solid #C9A047", background: "rgba(201,160,71,0.08)" }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#C9A047",
                    fontSize: "16px",
                    fontWeight: 700,
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
                    fontSize: "14px",
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
                    letterSpacing: "0.25em",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  GYM
                </div>
              </div>
            </div>
            <p
              style={{
                color: "#8C8078",
                fontSize: "13px",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              Mumbai's premier training arena. Rated 4.9 ★ from 658+ members.
              Nathalal Parekh Marg, Matunga East — where champions are forged.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid rgba(201,160,71,0.2)",
                    color: "#8C8078",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#C9A047";
                    el.style.color = "#C9A047";
                    el.style.background = "rgba(201,160,71,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201,160,71,0.2)";
                    el.style.color = "#8C8078";
                    el.style.background = "transparent";
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#F0EDE6",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              QUICK LINKS
            </div>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: "#8C8078",
                      fontSize: "13px",
                      fontFamily: "'Inter', sans-serif",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#C9A047")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#8C8078")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#F0EDE6",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              DISCIPLINES
            </div>
            <ul className="flex flex-col gap-2.5">
              {disciplines.map((d) => (
                <li key={d}>
                  <a
                    href="#services"
                    style={{
                      color: "#8C8078",
                      fontSize: "13px",
                      fontFamily: "'Inter', sans-serif",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#C9A047")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#8C8078")
                    }
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#F0EDE6",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              CONTACT
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Address", value: "Nathalal Parekh Marg\nMatunga East\nMumbai, MH 400019" },
                { label: "Phone", value: "+91 98201 00000" },
                { label: "Email", value: "hello@colosseumgym.in" },
                { label: "Hours", value: "Mon–Fri: 6 AM – 10 PM\nSat–Sun: 7 AM – 8 PM" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      color: "#C9A047",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      marginBottom: "3px",
                    }}
                  >
                    {item.label.toUpperCase()}
                  </div>
                  <div
                    style={{
                      color: "#8C8078",
                      fontSize: "12px",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(201,160,71,0.1)" }}
        >
          <p
            style={{
              color: "#5A5550",
              fontSize: "12px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Colosseum Gym, Matunga East, Mumbai. All rights reserved.
          </p>
          <div className="flex items-center gap-1" style={{ color: "#5A5550", fontSize: "12px", fontFamily: "'Inter', sans-serif" }}>
            <span>Rated</span>
            <span style={{ color: "#C9A047", fontWeight: 600 }}> 4.9 ★</span>
            <span> on Google · 658+ Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
