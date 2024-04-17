import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/Menu/MenuItem";


export default function Home() {
  return (
    <div>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4
        flex flex-col gap-4">
          <p>
            loremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremlorem
          </p>
          <p>
            loremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremlorem
          </p>
          <p>
            loremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremlorem
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
        subHeader={'Don\'t hesitate'}
        mainHeader={'Contact us'}
        />
        <div className="mt-8 ">
          <a className="text-4xl underline text-gray-500" href="tel:+86986888888">
          +86 986 888 888
          </a>
        </div>
      </section>
    </div>
  );
}


