import About from "./sections/about";
import ContactUs from "./sections/contactus";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Testimonials from "./sections/testimonials";
import Training from "./sections/training";

function App() {
  return (
    <div  className="overflow-x-hidden">
    
      <Hero />
    <About />
      <Services  />
      <ContactUs  />
      <Testimonials />
      <Footer />

    </div>
  );
}

export default App;
