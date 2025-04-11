import { useEffect, useState } from "react";
import Navbar from "./Navbar";

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
      <Navbar logo="full-logo2.png" bgcolor="white" textcolor="black" />
      <div className="">
        <img
          src={`IMAGE-${count}.jpg`}
          alt="shoe"
          className="relative h-[900px] w-screen"
        />
      </div>
      <div className="absolute top-50 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-yellow"></div>
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-3 h-3 rounded-full bg-orange"></div>
      </div>
    </div>
  );
}

export default Hero;
//className="bg-[url(/IMAGE-0.jpg)]  bg-cover bg-center h-screen "
// className={`bg-[url(/IMAGE-${count}.jpg)] bg-cover bg-center h-screen`}

{
  /* <div className="transition-transform ease-in-out h-[70%] w-screen">
<img
src={`IMAGE-${count}.jpg`}
alt="shoe"
className="relative h-full"
/>
</div>
<div className="absolute">
<div className="w-6 h-6 rounded-full border-white"></div>
<div></div>
<div></div>
</div> */
}
