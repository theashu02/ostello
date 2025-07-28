import ArjunaBatchCards from "./components/Cards/ArjunBtachCards";
import BatchCards from "./components/Cards/BatchCards";
import Cards from "./components/Cards/Cards";
import NeetLakshyaCards from "./components/Cards/NeetLakshyaCards";
import AppBanner from "./components/Common/AppBanner";
import NEETHero from "./components/Common/NeetHero";
import NeetHubHeader from "./components/Common/NeetHubHeader";
import FAQSection from "./components/FAQ/FAQSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import NeetExam2026 from "./components/Tables/Table";

export default function Home() {
  return (
    <div className="w-full">
      <div>
        <Navbar />
        
        <div className="mt-4">
          <NEETHero />
        </div>

        <NeetHubHeader />
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-[34px] font-bold">Class 11 NEET Courses</h1>
        </div>
        <ArjunaBatchCards />

        {/* <Cards /> */}
        {/* <NeetLakshyaCards /> */}
        {/* <BatchCards /> */}
        {/* <NeetExam2026 /> */}
        {/* <FAQSection /> */}
        {/* <AppBanner /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
