import { useState } from "react";
import { Clock } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const schedule: Record<string, { time: string; class: string; trainer: string; type: string }[]> = {
  Mon: [
    { time: "6:00 AM", class: "CrossFit", trainer: "Rohan M.", type: "Group" },
    { time: "8:00 AM", class: "Weight Training", trainer: "Karan D.", type: "Open" },
    { time: "5:00 PM", class: "Kickboxing", trainer: "Arjun S.", type: "Group" },
    { time: "7:00 PM", class: "Personal Training", trainer: "Priya N.", type: "1-on-1" },
  ],
  Tue: [
    { time: "6:00 AM", class: "Kickboxing", trainer: "Arjun S.", type: "Group" },
    { time: "8:00 AM", class: "Functional Training", trainer: "Priya N.", type: "Group" },
    { time: "5:00 PM", class: "CrossFit", trainer: "Rohan M.", type: "Group" },
    { time: "7:00 PM", class: "Weight Training", trainer: "Karan D.", type: "Open" },
  ],
  Wed: [
    { time: "6:00 AM", class: "CrossFit", trainer: "Rohan M.", type: "Group" },
    { time: "8:00 AM", class: "Sports Enhancement", trainer: "Karan D.", type: "Group" },
    { time: "5:00 PM", class: "Functional Training", trainer: "Priya N.", type: "Group" },
    { time: "7:00 PM", class: "Kickboxing", trainer: "Arjun S.", type: "Group" },
  ],
  Thu: [
    { time: "6:00 AM", class: "Weight Training", trainer: "Karan D.", type: "Open" },
    { time: "8:00 AM", class: "Personal Training", trainer: "Priya N.", type: "1-on-1" },
    { time: "5:00 PM", class: "CrossFit", trainer: "Rohan M.", type: "Group" },
    { time: "7:00 PM", class: "Prowler Sled", trainer: "Karan D.", type: "Conditioning" },
  ],
  Fri: [
    { time: "6:00 AM", class: "CrossFit", trainer: "Rohan M.", type: "Group" },
    { time: "8:00 AM", class: "Weight Training", trainer: "Karan D.", type: "Open" },
    { time: "5:00 PM", class: "Kickboxing", trainer: "Arjun S.", type: "Group" },
    { time: "7:00 PM", class: "Functional Training", trainer: "Priya N.", type: "Group" },
  ],
  Sat: [
    { time: "7:00 AM", class: "CrossFit Boot Camp", trainer: "Rohan M.", type: "Group" },
    { time: "9:00 AM", class: "Kickboxing", trainer: "Arjun S.", type: "Group" },
    { time: "11:00 AM", class: "Adult Sports", trainer: "Karan D.", type: "Sports" },
    { time: "4:00 PM", class: "Prowler Sled", trainer: "Karan D.", type: "Conditioning" },
  ],
  Sun: [
    { time: "7:00 AM", class: "Functional Training", trainer: "Priya N.", type: "Group" },
    { time: "9:00 AM", class: "Weight Training", trainer: "Karan D.", type: "Open" },
    { time: "11:00 AM", class: "Sports Enhancement", trainer: "Karan D.", type: "Group" },
    { time: "5:00 PM", class: "Personal Training", trainer: "Priya N.", type: "1-on-1" },
  ],
};

const typeColors: Record<string, string> = {
  Group: "#C9A047",
  "1-on-1": "#8B6FBF",
  Open: "#4A9A7A",
  Conditioning: "#C0522B",
  Sports: "#5B8DC9",
};

export function Schedule() {
  const [activeDay, setActiveDay] = useState("Mon");

  return (
    <section
      id="schedule"
      className="py-28"
      style={{ background: "#181614" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
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
              WEEKLY SCHEDULE
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
              CLASS TIMINGS
            </h2>
            <div
              className="mt-4"
              style={{ width: "60px", height: "2px", background: "#C9A047" }}
            />
          </div>
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: "rgba(201,160,71,0.08)", border: "1px solid rgba(201,160,71,0.2)" }}
          >
            <Clock size={16} style={{ color: "#C9A047" }} />
            <span
              style={{
                color: "#8C8078",
                fontSize: "13px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Mon–Fri: <strong style={{ color: "#F0EDE6" }}>6:00 AM – 10:00 PM</strong> &nbsp;|&nbsp; Sat–Sun: <strong style={{ color: "#F0EDE6" }}>7:00 AM – 8:00 PM</strong>
            </span>
          </div>
        </div>

        {/* Day tabs */}
        <div className="flex flex-wrap gap-1 mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className="px-5 py-2.5 transition-all duration-200"
              style={{
                background: activeDay === day ? "#C9A047" : "transparent",
                color: activeDay === day ? "#0D0C0B" : "#8C8078",
                border: activeDay === day ? "1px solid #C9A047" : "1px solid rgba(201,160,71,0.2)",
                fontFamily: "'Cinzel', serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                cursor: "pointer",
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {schedule[activeDay].map((cls, i) => (
            <div
              key={i}
              className="p-5"
              style={{ background: "#0D0C0B", border: "1px solid rgba(201,160,71,0.12)" }}
            >
              <div
                className="inline-flex items-center px-2 py-0.5 mb-3"
                style={{
                  background: `${typeColors[cls.type]}18`,
                  border: `1px solid ${typeColors[cls.type]}40`,
                }}
              >
                <span
                  style={{
                    color: typeColors[cls.type],
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {cls.type.toUpperCase()}
                </span>
              </div>
              <div
                style={{
                  color: "#C9A047",
                  fontSize: "20px",
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  marginBottom: "6px",
                }}
              >
                {cls.time}
              </div>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#F0EDE6",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  marginBottom: "4px",
                }}
              >
                {cls.class}
              </div>
              <div
                style={{
                  color: "#8C8078",
                  fontSize: "12px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                with {cls.trainer}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mt-8 pt-6" style={{ borderTop: "1px solid rgba(201,160,71,0.1)" }}>
          {Object.entries(typeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2">
              <div className="w-3 h-3" style={{ background: color }} />
              <span
                style={{
                  color: "#8C8078",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {type.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
