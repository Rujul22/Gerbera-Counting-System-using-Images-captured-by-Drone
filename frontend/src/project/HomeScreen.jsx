import { Header } from "./Header";
import Hero from "./Hero";
import Analytics from "./Anaylitics";
// import Cards from "./Cards";
import Newsletter from "./Newsletters";
import { Footer } from "./Footer";
import Bussiness from "./Bussiness";
import About from "./AboutUS";
import ContactUs from "./contactus";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Analytics />
      {/* <Cards /> */}
      <Bussiness />
      <Newsletter />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
export default Home;