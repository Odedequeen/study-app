import Hero from "../../components/Hero/Hero.jsx";
import Topbar from "../../components/Topbar/Topbar.jsx";
import TopTicker from "../../components/TopTicker/TopTicker.jsx";
import Header from "../../components/Header/Header.jsx";
import Features from "../../components/Features/Features.jsx";
import EnrollBanner from "../../components/EnrollBanner/EnrollBanner.jsx";
import Experience from "../../components/Experience/Experience.jsx";
import ExamPreparation from "../../components/ExamPreparation/ExamPreparation.jsx";
import CheckoutSection from "../../components/CheckoutSection/CheckoutSection.jsx";
import Industry from "../../components/Industry/Industry.jsx";
import MostPopular from "../../components/MostPopular/MostPopular.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Landing() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Experience />
      <CheckoutSection />
      <Industry />
      <Features />
      <EnrollBanner />
      <ExamPreparation />
      <TopTicker />
      <MostPopular />
      <Footer />
    </>
  );
}
