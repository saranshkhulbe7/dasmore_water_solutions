import ContactForm from "@/components/waterSolution/Contact";
import Filter from "@/components/waterSolution/Filter";
import Footer from "@/components/waterSolution/Footer";
import HomeHero from "@/components/waterSolution/Home";
import Leader from "@/components/waterSolution/Leader";
import Patented from "@/components/waterSolution/Patented";
import Program from "@/components/waterSolution/Program";
import Who from "@/components/waterSolution/Who";

export default function HomePage() {
  return (
    <main className="w-full mt-10 lg:mt-16">
      <HomeHero />
      <Who />
      <Patented />
      <Program />
      <Filter />
      <Leader />
      <ContactForm />
      <Footer />
    </main>
  );
}
