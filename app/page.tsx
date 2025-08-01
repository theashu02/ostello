import ArjunaBatchCards from "./components/Cards/ArjunBtachCards";
import NeetLakshyaCards from "./components/Cards/NeetLakshyaCards";
import AppBanner from "./components/Common/AppBanner";
import MoreInNeet from "./components/Common/MoreInNeet";
import NEETHero from "./components/Common/NeetHero";
import NeetHubHeader from "./components/Common/NeetHubHeader";
import ViewAllBatchesButton from "./components/Common/ViewAllButtonBatch";
import FAQSection from "./components/FAQ/FAQSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import NeetExam2026 from "./components/Tables/NewTable";

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

        <div className="flex justify-center my-8">
          <ViewAllBatchesButton />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-[34px] font-bold">Class 12 NEET Courses</h1>
        </div>

        <NeetLakshyaCards />

        <div className="flex justify-center my-8">
          <ViewAllBatchesButton />
        </div>
        <MoreInNeet />
        <NeetExam2026 />
        <FAQSection />
        <AppBanner />
        <Footer />
        {/* <Cards /> */}
      </div>
    </div>
  );
}
