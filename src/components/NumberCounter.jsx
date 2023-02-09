import React, { useState, useEffect } from "react";

function NumberCounter({ end, duration }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const tick = setInterval(() => {
      setCount((c) => {
        if (c >= end) {
          clearInterval(tick);
          return end;
        }
        return c + 1;
      });
    }, duration / end);
    return () => clearInterval(tick);
  }, [end, duration]);
  return <div>{count}</div>;
}
export default NumberCounter;
