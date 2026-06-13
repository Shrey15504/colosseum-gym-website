import { Star, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#0D0C0B" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1728486145245-d4cb0c9c3470?w=1920&h=1080&fit=crop&auto=format"
          alt="Colosseum Gym interior with premium equipment"
          className="w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        />
        {/* Dark gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,12,11,0.95) 0%, rgba(13,12,11,0.6) 50%, rgba(13,12,11,0.85) 100%)",
          }}
        />
      </div>

      {/* Decorative gold vertical lines */}
      <div
        className="absolute left-12 top-0 bottom-0 w-px hidden xl:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(201,160,71,0.4), transparent)" }}
      />
      <div
        className="absolute right-12 top-0 bottom-0 w-px hidden xl:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(201,160,71,0.4), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Rating badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="#C9A047"
                  style={{ color: "#C9A047" }}
                />
              ))}
            </div>
            <span
              style={{
                color: "#C9A047",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              4.9
            </span>
            <span
              style={{
                color: "#8C8078",
                fontSize: "13px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              · 658+ Reviews · Matunga East, Mumbai
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#F0EDE6",
              fontSize: "clamp(42px, 7vw, 88px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              marginBottom: "8px",
            }}
          >
            FORGE YOUR
          </h1>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#C9A047",
              fontSize: "clamp(42px, 7vw, 88px)",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              marginBottom: "28px",
            }}
          >
            STRENGTH
          </h1>

          {/* Subheadline */}
          <p
            style={{
              color: "#8C8078",
              fontSize: "clamp(14px, 1.8vw, 18px)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: "520px",
              marginBottom: "48px",
            }}
          >
            Mumbai's premier training arena — rated 4.9 from 658+ members.
            CrossFit, Kickboxing, Personal Training & more, all under one roof in
            Matunga East.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 transition-all duration-200"
              style={{
                background: "#C9A047",
                color: "#0D0C0B",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.15em",
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
            <a
              href="#schedule"
              className="inline-flex items-center px-8 py-4 transition-all duration-200"
              style={{
                border: "1px solid rgba(201,160,71,0.5)",
                color: "#F0EDE6",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement;
                el.style.borderColor = "#C9A047";
                el.style.color = "#C9A047";
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement;
                el.style.borderColor = "rgba(201,160,71,0.5)";
                el.style.color = "#F0EDE6";
              }}
            >
              VIEW CLASSES
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-8"
            style={{ borderTop: "1px solid rgba(201,160,71,0.15)" }}
          >
            {[
              { num: "10+", label: "Years of Excellence" },
              { num: "2,000+", label: "Members Trained" },
              { num: "8", label: "Training Disciplines" },
              { num: "10 PM", label: "Open Until" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#C9A047",
                    fontSize: "26px",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    color: "#8C8078",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    fontFamily: "'Inter', sans-serif",
                    marginTop: "4px",
                  }}
                >
                  {stat.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "rgba(201,160,71,0.5)" }}
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
