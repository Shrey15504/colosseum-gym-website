import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Trainers } from "./components/Trainers";
import { Schedule } from "./components/Schedule";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#0D0C0B",
        color: "#F0EDE6",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <main>
        <Hero />

        {/* Gold divider */}
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,160,71,0.4), transparent)" }} />

        <About />

        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,160,71,0.2), transparent)" }} />

        <Services />

        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,160,71,0.2), transparent)" }} />

        {/* Image banner between services and trainers */}
        <div className="relative overflow-hidden" style={{ height: "280px" }}>
          <img
            src="https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?w=1920&h=600&fit=crop&auto=format"
            alt="Kickboxing training at Colosseum Gym"
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ background: "rgba(13,12,11,0.7)" }}
          >
            <div
              style={{
                color: "#C9A047",
                fontSize: "11px",
                letterSpacing: "0.35em",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                marginBottom: "14px",
              }}
            >
              MATUNGA EAST · MUMBAI
            </div>
            <h3
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#F0EDE6",
                fontSize: "clamp(28px, 5vw, 56px)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                lineHeight: 1.1,
              }}
            >
              TRAIN LIKE A CHAMPION
            </h3>
            <div
              className="mt-5"
              style={{ width: "80px", height: "2px", background: "#C9A047" }}
            />
          </div>
        </div>

        <Trainers />

        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,160,71,0.2), transparent)" }} />

        <Schedule />

        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,160,71,0.2), transparent)" }} />

        <Testimonials />

        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,160,71,0.2), transparent)" }} />

        <Pricing />

        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,160,71,0.2), transparent)" }} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
