import { Zap, Activity, User, Trophy, Dumbbell, Target, Truck, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Kickboxing",
    desc: "High-intensity striking classes combining martial arts technique with cardiovascular conditioning. Build coordination, power, and mental focus.",
    tag: "Combat",
  },
  {
    icon: Activity,
    title: "CrossFit",
    desc: "Constantly varied functional movements performed at high intensity. Build strength, endurance, and agility in every session.",
    tag: "Group",
  },
  {
    icon: User,
    title: "Personal Training",
    desc: "One-on-one sessions tailored entirely to your goals. Our expert coaches design custom programs and keep you accountable.",
    tag: "1-on-1",
  },
  {
    icon: Trophy,
    title: "Adult Sports",
    desc: "Structured sports coaching for adults — improve your game, build teamwork skills, and stay competitive at any age.",
    tag: "Sports",
  },
  {
    icon: Dumbbell,
    title: "Weight Training",
    desc: "Progressive overload programs with premium free weights and machines. Build lean muscle, increase strength, and reshape your body.",
    tag: "Strength",
  },
  {
    icon: Target,
    title: "Functional Training",
    desc: "Movement-based workouts that improve real-world strength, mobility, and stability using kettlebells, resistance bands, and bodyweight.",
    tag: "Functional",
  },
  {
    icon: Truck,
    title: "Prowler Sled Training",
    desc: "Explosive conditioning on the prowler sled — build speed, power, and cardiovascular endurance in minimal time.",
    tag: "Conditioning",
  },
  {
    icon: TrendingUp,
    title: "Sports Enhancement",
    desc: "Periodised programs for competitive athletes targeting speed, agility, reaction time, and sport-specific strength.",
    tag: "Elite",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-28"
      style={{ background: "#181614" }}
    >
      <div className="max-w-7xl mx-auto px-6">
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
            WHAT WE OFFER
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
            TRAINING DISCIPLINES
          </h2>
          <div
            className="mx-auto mt-4"
            style={{ width: "60px", height: "2px", background: "#C9A047" }}
          />
          <p
            className="mt-6 mx-auto"
            style={{
              color: "#8C8078",
              fontSize: "15px",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Eight world-class disciplines under one roof — choose your arena and
            start your transformation today.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(201,160,71,0.1)" }}>
          {services.map((service, i) => (
            <div
              key={service.title}
              className="relative p-8 flex flex-col gap-4 transition-all duration-300 group cursor-default"
              style={{ background: "#181614" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1F1C1A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#181614";
              }}
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-5"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "rgba(201,160,71,0.07)",
                  fontSize: "48px",
                  fontWeight: 900,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(201,160,71,0.08)", border: "1px solid rgba(201,160,71,0.15)" }}
              >
                <service.icon size={20} style={{ color: "#C9A047" }} />
              </div>

              {/* Tag */}
              <div
                style={{
                  color: "#C9A047",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                {service.tag.toUpperCase()}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#F0EDE6",
                  fontSize: "17px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>

              {/* Desc */}
              <p
                style={{
                  color: "#8C8078",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.65,
                }}
              >
                {service.desc}
              </p>

              {/* Bottom line hover accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                style={{
                  background: "#C9A047",
                  width: "0%",
                }}
                ref={(el) => {
                  if (!el) return;
                  const parent = el.parentElement!;
                  parent.addEventListener("mouseenter", () => {
                    el.style.width = "100%";
                  });
                  parent.addEventListener("mouseleave", () => {
                    el.style.width = "0%";
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
