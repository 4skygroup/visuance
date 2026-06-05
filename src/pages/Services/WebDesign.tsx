import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";

export default function WebDesign() {
  const services = [
    "Site-mapping and user journeys",
    "Flexible website designs ",
    "Framer websites ",
    "Bespoke WordPress",
    "Bespoke Umbraco",
    "Shopify",
    "Accessibility",
    "Maintenance",
    "SEO",
  ];
  return (
    <div className="flex flex-col max-sm:gap-y-10 gap-y-25">
      <ScrollToTop />
      <section className="high:h-[calc(50vh)] flex w-fit h-fit bg-[url('/images/Services/WebDesign/WebFond.jpg')] high:bg-[url('/images/Services/WebDesign/WebFond.jpg')] bg-no-repeat bg-cover bg-center">
        <section className="high:h-[calc(50vh)] flex flex-col gap-y-12.5 px-20 py-5 max-sm:pt-0 w-screen h-screen scroll-smooth bg-black/40">
          <Header />
          <p className="m-auto text-4xl text-center">WEB DESIGN</p>
        </section>
      </section>
      <section className="text-black flex flex-col gap-y-12.5 w-full p-12.5">
        <p className="uppercase text-4xl font-bold">OUR SERVICES</p>
        <div className="max-lg:flex-col-reverse max-lg:gap-y-15 lg:max-xl:gap-50 flex w-full px-25 justify-center items-center gap-x-75">
          <ol className="flex flex-col gap-y-5">
            {services.map((service, index) => (
              <li
                key={index}
                className="max-xs:w-70 max-w-100 w-100 border-b border-b-solid border-b-black flex justify-between items-center p-2.5"
              >
                <span className="text-base uppercase">{service}</span>
                <span className="text-3xl">{index + 1}</span>
              </li>
            ))}
          </ol>
          <img
            src="/images/Services/WebDesign/WebFond2.jpg"
            className="min-w-70 aspect-407/343 object-cover max-w-101.75"
            alt="Colors"
          />
        </div>
      </section>
      <section className="text-black flex flex-col gap-y-12.5 w-full p-12.5">
        <p className="uppercase text-4xl font-bold">OVERVIEW</p>
        <div className="grid grid-cols-[repeat(4, auto)] grid-rows-[repeat(3, auto)] max-md:gap-2.5 gap-7.5 max-w-7xl self-center">
          <img
            src="/images/Services/WebDesign/Web1.jpg"
            alt=""
            className="col-[1/3] grow row-start-1 aspect-630/660 object-cover rounded-r1 max-sm:rounded-r3"
          />
          <img
            src="/images/Services/WebDesign/Web2.jpg"
            alt=""
            className="col-start-3 grow row-start-1 aspect-300/660 object-cover rounded-r1 max-sm:rounded-r3"
          />
          <img
            src="/images/Services/WebDesign/Web3.jpg"
            alt=""
            className="col-start-4 grow row-start-1 aspect-300/660 object-cover rounded-r1 max-sm:rounded-r3"
          />
          <img
            src="/images/Services/WebDesign/Web4.jpg"
            alt=""
            className="col-[1/3] row-start-2 aspect-630/760 object-cover rounded-r1 max-sm:rounded-r3"
          />
          <img
            src="/images/Services/WebDesign/Web5.jpg"
            alt=""
            className="col-[3/5] row-start-2 aspect-630/760 object-cover rounded-r1 max-sm:rounded-r3"
          />
          <img
            src="/images/Services/WebDesign/Web6.jpg"
            alt=""
            className="col-[1/3]  row-start-3 aspect-630/360 object-cover rounded-r1 max-sm:rounded-r3"
          />
          <img
            src="/images/Services/WebDesign/Web7.jpg"
            alt=""
            className="col-[3/5] row-start-3 aspect-630/360 object-cover rounded-r1 max-sm:rounded-r3"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
