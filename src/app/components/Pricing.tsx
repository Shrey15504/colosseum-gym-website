import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹2,499",
    period: "/month",
    tagline: "Perfect entry point for your fitness journey",
    features: [
      "Full gym floor access",
      "Weight training area",
      "Locker room access",
      "2 group classes / week",
      "Fitness assessment",
      "Steam room (weekdays)",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹3,999",
    period: "/month",
    tagline: "Most popular — the champion's choice",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "CrossFit & Kickboxing access",
      "1 PT session / month",
      "Steam room (daily)",
      "Priority class booking",
      "Nutrition consultation",
    ],
    cta: "Join Pro",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "₹5,999",
    period: "/month",
    tagline: "For the serious athlete, no compromises",
    features: [
      "Everything in Pro",
      "4 PT sessions / month",
      "Sports enhancement program",
      "Prowler sled access",
      "Body composition tracking",
      "Dedicated locker",
      "Guest passes (2/month)",
      "Priority trainer access",
    ],
    cta: "Go Elite",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
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
            MEMBERSHIP PLANS
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
            CHOOSE YOUR ARENA
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
              maxWidth: "480px",
            }}
          >
            Flexible plans with no hidden fees. Join monthly or commit annually
            for exclusive discounts.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col transition-all duration-300"
              style={{
                background: plan.highlighted ? "#C9A047" : "#0D0C0B",
                border: plan.highlighted
                  ? "1px solid #C9A047"
                  : "1px solid rgba(201,160,71,0.15)",
                transform: plan.highlighted ? "scale(1.03)" : "scale(1)",
              }}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1"
                  style={{
                    background: "#0D0C0B",
                    border: "1px solid #C9A047",
                  }}
                >
                  <span
                    style={{
                      color: "#C9A047",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan name */}
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: plan.highlighted ? "#0D0C0B" : "#C9A047",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    marginBottom: "12px",
                  }}
                >
                  {plan.name.toUpperCase()}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: plan.highlighted ? "#0D0C0B" : "#F0EDE6",
                      fontSize: "42px",
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      color: plan.highlighted ? "rgba(13,12,11,0.6)" : "#8C8078",
                      fontSize: "14px",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  style={{
                    color: plan.highlighted ? "rgba(13,12,11,0.7)" : "#8C8078",
                    fontSize: "13px",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.5,
                    marginBottom: "28px",
                  }}
                >
                  {plan.tagline}
                </p>

                {/* Divider */}
                <div
                  className="mb-6"
                  style={{
                    height: "1px",
                    background: plan.highlighted
                      ? "rgba(13,12,11,0.2)"
                      : "rgba(201,160,71,0.12)",
                  }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: plan.highlighted ? "#0D0C0B" : "#C9A047" }}
                      />
                      <span
                        style={{
                          color: plan.highlighted ? "rgba(13,12,11,0.85)" : "#C8C0B4",
                          fontSize: "13px",
                          fontFamily: "'Inter', sans-serif",
                          lineHeight: 1.5,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="block text-center py-3.5 transition-all duration-200"
                  style={{
                    background: plan.highlighted ? "#0D0C0B" : "transparent",
                    color: plan.highlighted ? "#C9A047" : "#C9A047",
                    border: `1px solid ${plan.highlighted ? "#0D0C0B" : "rgba(201,160,71,0.4)"}`,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.highlighted) {
                      el.style.background = "#181614";
                    } else {
                      el.style.background = "rgba(201,160,71,0.08)";
                      el.style.borderColor = "#C9A047";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.highlighted) {
                      el.style.background = "#0D0C0B";
                    } else {
                      el.style.background = "transparent";
                      el.style.borderColor = "rgba(201,160,71,0.4)";
                    }
                  }}
                >
                  {plan.cta.toUpperCase()}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="text-center mt-8"
          style={{
            color: "#8C8078",
            fontSize: "12px",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          Annual plans available at a 15% discount · GST included · No joining fee for first 50 members this month
        </p>
      </div>
    </section>
  );
}
