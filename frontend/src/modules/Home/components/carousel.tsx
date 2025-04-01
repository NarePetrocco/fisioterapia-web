import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/fisio1.jpg",
  "/assets/fisio2.jpg",
  "/assets/fisio3.jpg"
];

const variants = {
  enter: { x: 300, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 }
};

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (



    <div
      className="relative w-full h-[600px] overflow-hidde bg-cyan-600"
      style={{ height: "600px" }} 
    >
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          className="absolute top-0 left-0 w-full h-full object-cover" 
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
