import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sneha Kulkarni",
    role: "CrossFit Member · 2 years",
    rating: 5,
    text: "The ambiance at Colosseum is unlike any other gym I've been to in Mumbai. It's energizing the moment you walk in — the music, the layout, the vibe. The trainers push you just the right amount. Absolutely worth every rupee.",
    avatar: "SK",
  },
  {
    name: "Rahul Phadke",
    role: "Kickboxing Member · 1.5 years",
    rating: 5,
    text: "Arjun sir is phenomenal. I joined knowing nothing about kickboxing and within three months I was sparring confidently. The gym is always spotless, never overcrowded, and there's actually ample parking — rare in Matunga!",
    avatar: "RP",
  },
  {
    name: "Divya Menon",
    role: "Personal Training · 8 months",
    rating: 5,
    text: "I've tried five gyms in Mumbai before Colosseum. This is where I stayed. Clean, serene location, extremely knowledgeable trainers, and the steam room after sessions is a blessing. The 4.9 rating is very well earned.",
    avatar: "DM",
  },
  {
    name: "Vikram Bhat",
    role: "Strength & CrossFit · 3 years",
    rating: 5,
    text: "Colosseum is the best gym in Matunga, hands down. Top-tier equipment that's always maintained, friendly staff, and coaches who actually care about your form and progress. My entire family trains here now.",
    avatar: "VB",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-28 relative overflow-hidden"
      style={{ background: "#0D0C0B" }}
    >
      {/* Background text watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "200px",
          fontWeight: 900,
          color: "rgba(201,160,71,0.03)",
          whiteSpace: "nowrap",
          letterSpacing: "0.1em",
        }}
      >
        REVIEWS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            style={{
              color: "#C9A047",
              fontSize: "11px",
              letterSpacing: "0.25em",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: "14px",
            }}
          >
            WHAT MEMBERS SAY
          </div>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#F0EDE6",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              lineHeight: 1.15,
            }}
          >
            CHAMPION TESTIMONIALS
          </h2>
          <div
            className="mx-auto mt-4"
            style={{ width: "60px", height: "2px", background: "#C9A047" }}
          />

          {/* Rating showcase */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#C9A047",
                fontSize: "72px",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}
            >
              4.9
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#C9A047" style={{ color: "#C9A047" }} />
              ))}
            </div>
            <div
              style={{
                color: "#8C8078",
                fontSize: "13px",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              BASED ON 658+ GOOGLE REVIEWS
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 relative group transition-all duration-300"
              style={{
                background: "#181614",
                border: "1px solid rgba(201,160,71,0.1)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,160,71,0.3)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,160,71,0.1)")
              }
            >
              {/* Quote icon */}
              <Quote
                size={32}
                style={{ color: "rgba(201,160,71,0.2)", marginBottom: "16px" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={13} fill="#C9A047" style={{ color: "#C9A047" }} />
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  color: "#C8C0B4",
                  fontSize: "15px",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(201,160,71,0.12)",
                    border: "1px solid rgba(201,160,71,0.3)",
                    fontFamily: "'Cinzel', serif",
                    color: "#C9A047",
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#F0EDE6",
                      fontSize: "14px",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      color: "#8C8078",
                      fontSize: "11px",
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Gold accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ background: "linear-gradient(to bottom, transparent, #C9A047, transparent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
