import "./App.css";
import { motion, useScroll } from "framer-motion";
import Images from "./Images";
import shortid from "shortid";
import { useEffect, useRef, useState } from "react";
function App() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <motion.div className="carousel" ref={carouselRef}>
      <motion.div
        drag="x"
        className="inner-carousel"
        dragConstraints={{ right: 0 , left: - width}}
        whileTap={{cursor: 'grabbing'}}
      >
        {Images.map((image) => (
          <motion.div key={shortid.generate()} className="item">
            <img src={image} alt="image" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default App;
