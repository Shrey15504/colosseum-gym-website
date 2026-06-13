import { Instagram, Twitter, Linkedin } from "lucide-react";

const trainers = [
  {
    name: "Rohan Mehta",
    specialty: "CrossFit & Strength Coach",
    bio: "Level-2 CrossFit certified. 8 years of coaching experience, competitive powerlifting background.",
    img: "https://images.unsplash.com/photo-1652400744403-8f29705bd6a5?w=400&h=500&fit=crop&auto=format",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Arjun Shetty",
    specialty: "Kickboxing & Combat Sports",
    bio: "National-level kickboxer with 6 years training competitive and recreational athletes.",
    img: "https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?w=400&h=500&fit=crop&auto=format",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Priya Nair",
    specialty: "Functional & Personal Training",
    bio: "NSCA-CSCS certified. Specialises in fat loss, mobility, and sports performance for working professionals.",
    img: "https://images.unsplash.com/photo-1535469618671-e58a8c365cbd?w=400&h=500&fit=crop&auto=format",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Karan Desai",
    specialty: "Sports Enhancement & Conditioning",
    bio: "Former division-1 athlete turned S&C coach. Trains competitive sportspeople using periodised programming.",
    img: "https://images.unsplash.com/photo-1606335543586-137481155deb?w=400&h=500&fit=crop&auto=format",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
];

export function Trainers() {
  return (
    <section
      id="trainers"
      className="py-28"
      style={{ background: "#0D0C0B" }}
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
            MEET THE COACHES
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
            YOUR EXPERT TRAINERS
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
            Friendly, knowledgeable, and genuinely invested in your success —
            our coaches are what make Colosseum Gym truly exceptional.
          </p>
        </div>

        {/* Trainers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group relative overflow-hidden"
              style={{ background: "#181614", border: "1px solid rgba(201,160,71,0.1)" }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: "320px", background: "#252220" }}>
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{
                    background: "linear-gradient(to top, rgba(24,22,20,1), transparent)",
                  }}
                />

                {/* Social icons — appear on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300"
                  style={{ background: "rgba(13,12,11,0.6)", opacity: 0 }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.parentElement!.parentElement!;
                    parent.addEventListener("mouseenter", () => {
                      el.style.opacity = "1";
                    });
                    parent.addEventListener("mouseleave", () => {
                      el.style.opacity = "0";
                    });
                  }}
                >
                  {[
                    { icon: Instagram, href: trainer.socials.instagram, label: "instagram" },
                    { icon: Twitter, href: trainer.socials.twitter, label: "twitter" },
                    { icon: Linkedin, href: trainer.socials.linkedin, label: "linkedin" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                      style={{
                        background: "rgba(201,160,71,0.15)",
                        border: "1px solid rgba(201,160,71,0.4)",
                        color: "#C9A047",
                      }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#F0EDE6",
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    marginBottom: "4px",
                  }}
                >
                  {trainer.name}
                </h3>
                <div
                  style={{
                    color: "#C9A047",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  {trainer.specialty.toUpperCase()}
                </div>
                <p
                  style={{
                    color: "#8C8078",
                    fontSize: "13px",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.6,
                  }}
                >
                  {trainer.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
