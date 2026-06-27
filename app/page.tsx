import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Gallery from "@/components/Gallery";
import Policies from "@/components/Policies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBooking from "@/components/StickyBooking";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-[#F7F1E8] text-[#111111] overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Gallery />
      <Policies />
      <Contact />
      <Footer />
      <StickyBooking />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}