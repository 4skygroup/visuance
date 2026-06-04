import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PrintDesign() {
  const services = [
    "Brochures",
    "Annual Reports",
    "Stationery",
    "Promotional materials",
    "Menu design",
    "Signage & wayfinding",
    "Packaging",
    "Design",
    "Exhibition",
    "Infographics",
  ];
  return (
    <div className="flex flex-col max-sm:gap-y-10 gap-y-25">
      <section className="high:h-[calc(50vh)] flex w-fit h-fit bg-[url('/images/Services/PrintDesign/PrintFond.jpg')] high:bg-[url('/images/Services/PrintDesign/Print1.jpg')] bg-cover bg-no-repeat bg-center">
        <section className="high:h-[calc(50vh)] flex flex-col gap-y-12.5 px-20 py-12.5 w-screen h-screen scroll-smooth bg-[rgba(0,0,0,0.5)]">
          <Header />
          <p className="m-auto text-4xl text-center">PRINT DESIGN</p>
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
            src="/images/Services/PrintDesign/PrintFond2.jpg"
            className="min-w-70 aspect-407/343 object-cover max-w-101.75"
            alt="Colors"
          />
        </div>
      </section>
      <section className="text-black flex flex-col gap-y-12.5 w-full p-12.5">
        <p className="uppercase text-4xl font-bold">OVERVIEW</p>
        <div className="grid grid-cols-[repeat(4, auto)] grid-rows-[repeat(3, auto)] max-md:gap-2.5 gap-7.5 max-w-7xl self-center">
          <img
            src="/images/Services/PrintDesign/Print1.jpg"
            alt=""
            className="col-[1/3] grow row-start-1 aspect-630/660 object-cover rounded-r1"
          />
          <img
            src="/images/Services/PrintDesign/Print2.jpg"
            alt=""
            className="col-start-3 grow row-start-1 aspect-300/660 object-cover rounded-r1"
          />
          <img
            src="/images/Services/PrintDesign/Print3.jpg"
            alt=""
            className="col-start-4 grow row-start-1 aspect-300/660 object-cover rounded-r1"
          />
          <img
            src="/images/Services/PrintDesign/Print4.jpg"
            alt=""
            className="col-[1/3] row-start-2 aspect-630/760 object-cover rounded-r1"
          />
          <img
            src="/images/Services/PrintDesign/Print5.jpg"
            alt=""
            className="col-[3/5] row-start-2 aspect-630/760 object-cover rounded-r1"
          />
          <img
            src="/images/Services/PrintDesign/Print6.jpg"
            alt=""
            className="col-[1/3] w-full row-start-3 aspect-630/360 object-cover rounded-r1"
          />
          <img
            src="/images/Services/PrintDesign/Print7.jpg"
            alt=""
            className="col-[3/5] row-start-3 aspect-630/360 object-cover rounded-r1"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
