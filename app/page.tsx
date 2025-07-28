import Cards from "./components/Cards/Cards";
import FAQSection from "./components/FAQ/FAQSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-7xl">
        <Navbar />
        <Cards />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}
