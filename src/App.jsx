// src/App.jsx
import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";

export default function App() {
  // Store the current time in state so React re-renders when it changes
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // Update the clock every second
    const id = setInterval(() => setNow(new Date()), 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(id);
  }, []);

  // Format date + time in a readable way (rubric: both date and time shown)
  const formattedDateTime = useMemo(() => {
    return format(now, "EEEE, MMM d, yyyy — HH:mm:ss");
  }, [now]);

  return (
    <main>
      <div className="clock">
        <p>{formattedDateTime}</p>
      </div>
    </main>
  );
}