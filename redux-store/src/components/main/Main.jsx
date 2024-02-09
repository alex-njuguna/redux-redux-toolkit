import Navbar from "../navbar/Navbar";
import Slider from "../slider/Slider";
import NavigateButtons from "../navigateButtons/NavigateButtons";
import ProductSection from "../productSection/ProductSection";
import Footer from "../footer/Footer";

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <NavigateButtons></NavigateButtons>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </div>
  );
}
