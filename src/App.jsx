import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function timeToHue(date) {
  // Map time of day to hue (0-360). Makes color feel "alive".
  const seconds =
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  const hue = (seconds / 86400) * 360;
  return Math.round(hue);
}

export default function App() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // Update time every second
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id); // cleanup
  }, []);

  const formatted = useMemo(() => {
    // Example output: "Saturday, Feb 21, 2026 — 14:03:09"
    return format(now, "EEEE, MMM d, yyyy — HH:mm:ss");
  }, [now]);

  const hue = timeToHue(now);
  const accentHue = clamp(hue + 40, 0, 360);

  return (
    <div className="page" style={{ "--hue": hue, "--accentHue": accentHue }}>
      <div className="card">
        <h1 className="title">Color Clock</h1>
        <p className="time" aria-live="polite">
          {formatted}
        </p>
        <p className="hint">Updates every second • Powered by date-fns</p>
      </div>
    </div>
  );
}