import { Dumbbell, Sparkles, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Top-Tier Equipment",
    desc: "Competition-grade barbells, racks, cardio machines, and functional training rigs kept in immaculate condition.",
  },
  {
    icon: Sparkles,
    title: "Spotless Facilities & Steam Room",
    desc: "Clean, spacious changing rooms with steam bath facilities — a serene escape after every intense session.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    desc: "Certified coaches across CrossFit, kickboxing, and strength disciplines — knowledgeable, friendly, and invested in your progress.",
  },
  {
    icon: Clock,
    title: "Never Overcrowded",
    desc: "Thoughtfully managed capacity so you always have the space and equipment you need, any time of day.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ background: "#0D0C0B" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=800&h=1000&fit=crop&auto=format"
              alt="Colosseum Gym premium equipment"
              className="w-full object-cover"
              style={{ height: "560px" }}
            />
            {/* Gold frame accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 hidden md:block"
              style={{ border: "2px solid rgba(201,160,71,0.3)", zIndex: -1 }}
            />
            {/* Rating badge */}
            <div
              className="absolute top-6 right-6 px-5 py-4 text-center"
              style={{ background: "rgba(13,12,11,0.92)", border: "1px solid rgba(201,160,71,0.4)" }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#C9A047",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                4.9
              </div>
              <div style={{ color: "#8C8078", fontSize: "11px", letterSpacing: "0.1em", fontFamily: "'Inter', sans-serif" }}>
                ★★★★★
              </div>
              <div style={{ color: "#8C8078", fontSize: "10px", letterSpacing: "0.08em", fontFamily: "'Inter', sans-serif", marginTop: "2px" }}>
                658 REVIEWS
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <div
              style={{
                color: "#C9A047",
                fontSize: "11px",
                letterSpacing: "0.25em",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              ABOUT COLOSSEUM GYM
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#F0EDE6",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "0.02em",
                marginBottom: "24px",
              }}
            >
              WHERE CHAMPIONS
              <br />
              <span style={{ color: "#C9A047" }}>ARE FORGED</span>
            </h2>
            <p
              style={{
                color: "#8C8078",
                fontSize: "16px",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.8,
                marginBottom: "48px",
              }}
            >
              Nestled in the heart of Matunga East, Colosseum Gym is more than a
              fitness centre — it's an arena built for transformation. Step inside
              to experience an energizing, motivating atmosphere that pushes you
              beyond limits. Our spacious, well-lit training floor, premium
              equipment, and clean facilities create the perfect environment for
              serious athletes and beginners alike.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-5 transition-all duration-200 group"
                  style={{ background: "#181614", border: "1px solid rgba(201,160,71,0.1)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,160,71,0.35)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,160,71,0.1)")
                  }
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ background: "rgba(201,160,71,0.1)" }}
                  >
                    <f.icon size={18} style={{ color: "#C9A047" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Cinzel', serif",
                        color: "#F0EDE6",
                        fontSize: "13px",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        marginBottom: "6px",
                      }}
                    >
                      {f.title}
                    </div>
                    <div
                      style={{
                        color: "#8C8078",
                        fontSize: "13px",
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: 1.6,
                      }}
                    >
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
