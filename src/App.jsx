import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <div className="pt-[4.75] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />

        <Pricing />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
