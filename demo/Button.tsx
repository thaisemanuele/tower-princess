import { useState } from "react";

interface ButtonProps {
  label: string;
  count?: number;
}

// A small button that counts clicks
export function Button({ label, count = 0 }: ButtonProps) {
  const [clicks, setClicks] = useState(count);

  return (
    <button className="btn-primary" onClick={() => setClicks(clicks + 1)}>
      {label}: {clicks}
    </button>
  );
}
