import Cover from "../sections/Cover";
import About from "../sections/About";
import Technical from "../sections/Technical";
import Mission from "../sections/Mission";
import Complements from "../sections/Complements";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <>
      <Cover />
      <About />
      <Technical/>
      <Mission />
      <Complements />
       {/* <Contact/> */}
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
      {/* <Footer /> */}
    </>
  );
}
