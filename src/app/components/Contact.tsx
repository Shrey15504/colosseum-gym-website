import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#181614",
    border: "1px solid rgba(201,160,71,0.2)",
    color: "#F0EDE6",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    padding: "12px 16px",
    outline: "none",
  };

  return (
    <section
      id="contact"
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
            FIND US
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
            VISIT THE ARENA
          </h2>
          <div
            className="mx-auto mt-4"
            style={{ width: "60px", height: "2px", background: "#C9A047" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map & Info */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <div
              className="relative overflow-hidden"
              style={{ height: "300px", background: "#181614", border: "1px solid rgba(201,160,71,0.15)" }}
            >
              <iframe
                title="Colosseum Gym Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8491!3d19.0260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e4b0000001%3A0x1!2sMatunga+East%2C+Mumbai%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ border: "1px solid rgba(201,160,71,0.15)" }}
              />
            </div>

            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Nathalal Parekh Marg, Matunga East, Mumbai, Maharashtra 400019",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 98201 00000",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@colosseumgym.in",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon–Fri: 6 AM–10 PM\nSat–Sun: 7 AM–8 PM",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex gap-4 p-4"
                  style={{ background: "#181614", border: "1px solid rgba(201,160,71,0.12)" }}
                >
                  <div
                    className="w-9 h-9 flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(201,160,71,0.08)" }}
                  >
                    <info.icon size={16} style={{ color: "#C9A047" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#C9A047",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        marginBottom: "4px",
                      }}
                    >
                      {info.label.toUpperCase()}
                    </div>
                    <div
                      style={{
                        color: "#C8C0B4",
                        fontSize: "13px",
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: 1.5,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-8"
            style={{ background: "#181614", border: "1px solid rgba(201,160,71,0.15)" }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#F0EDE6",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                marginBottom: "8px",
              }}
            >
              Start Your Journey
            </div>
            <p
              style={{
                color: "#8C8078",
                fontSize: "13px",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "28px",
                lineHeight: 1.6,
              }}
            >
              Fill in your details and one of our coaches will reach out within
              24 hours.
            </p>

            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-16"
                style={{ textAlign: "center" }}
              >
                <CheckCircle size={48} style={{ color: "#C9A047" }} />
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#F0EDE6",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  Message Received!
                </div>
                <p style={{ color: "#8C8078", fontSize: "14px", fontFamily: "'Inter', sans-serif" }}>
                  Our team will contact you shortly. Welcome to Colosseum.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      style={{
                        color: "#8C8078",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        fontFamily: "'Inter', sans-serif",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      FULL NAME *
                    </label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Raj Sharma"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C9A047")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,160,71,0.2)")}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        color: "#8C8078",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        fontFamily: "'Inter', sans-serif",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      PHONE *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98XXX XXXXX"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C9A047")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,160,71,0.2)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      color: "#8C8078",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      fontFamily: "'Inter', sans-serif",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="raj@example.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#C9A047")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,160,71,0.2)")}
                  />
                </div>

                <div>
                  <label
                    style={{
                      color: "#8C8078",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      fontFamily: "'Inter', sans-serif",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    I'M INTERESTED IN
                  </label>
                  <select
                    value={formState.interest}
                    onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#C9A047")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,160,71,0.2)")}
                  >
                    <option value="" style={{ background: "#181614" }}>Select a service...</option>
                    <option value="crossfit" style={{ background: "#181614" }}>CrossFit</option>
                    <option value="kickboxing" style={{ background: "#181614" }}>Kickboxing</option>
                    <option value="personal" style={{ background: "#181614" }}>Personal Training</option>
                    <option value="weights" style={{ background: "#181614" }}>Weight Training</option>
                    <option value="functional" style={{ background: "#181614" }}>Functional Training</option>
                    <option value="membership" style={{ background: "#181614" }}>General Membership</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      color: "#8C8078",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      fontFamily: "'Inter', sans-serif",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your fitness goals..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "#C9A047")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,160,71,0.2)")}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 py-4 transition-all duration-200"
                  style={{
                    background: "#C9A047",
                    color: "#0D0C0B",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.background = "#DEB96A")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.background = "#C9A047")
                  }
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
