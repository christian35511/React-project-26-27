
import { useMemo, useState } from "react";

export default function NumberCalculator() {
  const [number, setNumber] = useState(1);

  const doubledNumber = useMemo(() => {
    return number * 2;
  }, [number]);

  return (
    <div>
      <h2>useMemo Example</h2>

      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}
      />

      <p>Number: {number}</p>

      <p>Doubled: {doubledNumber}</p>
    </div>
  );
}



