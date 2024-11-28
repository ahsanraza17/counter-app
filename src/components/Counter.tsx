import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncreament = () => {
    setCount((preCount) => preCount + 1);
  }

  const handleDecreament = () => {
    setCount((preCount) => preCount - 1);
  }

  return (
    <section className="w-full h-screen relative bg-offWhite">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] rounded-2xl flex flex-col items-center gap-5 py-10 shadow-3d">
        <h1 className="text-[50px] leading-tight font-bold">Counter Project</h1>
        <h1 className={`font-bold text-[70px] ${count > 0 ? "text-darkGreen" : count < 0 ? "text-pureRed" : "text-black"} text-black`}>{count} </h1>
        <div className="flex gap-10">
          <button onClick={handleDecreament} className="p-3 text-lg text-white font-bold bg-pureRed rounded-md">Decreament</button>
          <button onClick={handleIncreament} className="p-3 text-lg text-white font-bold bg-darkGreen rounded-md">Increament</button>
        </div>
      </div>
    </section>
  )
}

export default Counter;
