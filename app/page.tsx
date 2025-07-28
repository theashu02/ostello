import BatchCards from "./components/Cards/BatchCards";
import Cards from "./components/Cards/Cards";
import NeetLakshyaCards from "./components/Cards/NeetLakshyaCards";
import NEETHero from "./components/Common/NeetHero";
import FAQSection from "./components/FAQ/FAQSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import NeetExam2026 from "./components/Tables/Table";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-7xl">
        <Navbar />
        <NEETHero />
        <Cards />
        <NeetLakshyaCards />
        <BatchCards />
        <NeetExam2026 />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}
