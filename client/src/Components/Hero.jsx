import { useEffect, useState } from "react";

function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count === 2 ? 0 : count + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [setCount]);

  return (
    <div>
      <img
        src={`IMAGE-${count}.jpg`}
        alt="shoe"
        className="relative h-[900px] w-screen"
      />

      <div className="absolute top-50 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-yellow"></div>
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-3 h-3 rounded-full bg-orange"></div>
      </div>
    </div>
  );
}

export default Hero;
