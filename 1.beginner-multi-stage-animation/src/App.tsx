import "./App.css";
import { useMotionValue, motion } from "framer-motion";
import { useState } from "react";
import ReactLogo from "./assets/react.svg";

const App = () => {
  const scale = useMotionValue(1);
  const [value, setValue] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    scale.set(newValue);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-[150px] overflow-hidden flex relative flex-col aspect-[2/4] text-white bg-[#41352a] rounded-2xl">
        <div className="h-full fadeout">
          <motion.div
            className="text-[80px] [font-family:monospace] origin-top-left leading-[0.8] inset-1 absolute break-all"
            style={{ scale }}
            animate={{
              opacity: [0, 1, 1, 1, 1, 1, 0],
              scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
              scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 8],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.05, 0.2, 0.3, 0.45, 0.7, 1],
              duration: 18,
            }}
          >
            Nahid Hasan
          </motion.div>
        </div>
        <p className="mt-auto  p-2">One day I'll earn in millions Insallah</p>
      </div>

      <motion.img
        src={ReactLogo}
        alt="React Logo"
        style={{ scale }}
        className="absolute bottom-20 w-20 h-20"
      />

      <div className="absolute bottom-10 w-full flex justify-center">
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={value}
          onChange={handleChange}
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default App;
