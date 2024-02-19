import "./App.css";
import styles from "./style";
import Billing from "./components/Billing";
import Button from "./components/Button";
import CaedDeal from "./components/CardDeal";
import Clients from "./components/Clients";
// import CTA from "./components/CTA";
import FeedbackCard from "./components/FeedbackCard";
import Footer from "./components/Footer";
import Getstart from "./components/Getstart";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Bussiness from "./components/Bussiness";

function App() {
  return (
    <>
      <div className="bg-indigo-950 w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-indigo-950 ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Bussiness />
            <Billing />
            <CaedDeal />
            <Testimonials />
            <Clients />
            
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
