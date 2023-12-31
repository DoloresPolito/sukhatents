import React, { useEffect, useState } from "react";
import Cover from "../sections/Cover";
import About from "../sections/About";
import Technical from "../sections/Technical";
import Mission from "../sections/Mission";
import Complements from "../sections/Complements";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import ScrollToTop from "react-scroll-to-top";
import { motion } from "framer-motion";

export default function Home() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); 

    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  const medium = 500;

  return (
    <>
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
      <Cover />
      <About />
      <Technical />
      <Mission />
      <Complements />
      <Contact />

      {width > medium ? (
        <>
          <ScrollToTop
            style={{
              backgroundColor: "transparent",
              zIndex: "3000",
              borderRadius: "20px",
              height: "55px",
            }}
            color="#6a6f58"
            smooth
          />
        </>
      ) : (
        <></>
      )}

      <Footer />
      </motion.div>
    </>
  );
}
