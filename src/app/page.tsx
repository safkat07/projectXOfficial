import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import OurProjects from "@/components/OurProjects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <AboutUs />
      <OurProjects />
      <ContactUs />
      <Footer />
    </div>
  );
}
