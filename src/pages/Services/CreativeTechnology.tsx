import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";

export default function CreativeTechnology() {
  // const services = [
  //   "PURPOSE, VISION, MISSION",
  //   "Brand positioning and narrative",
  //   "Tone of voice",
  //   "Brand messaging",
  //   "Brand name",
  //   "Logo Design",
  //   "Visual Design Systems",
  //   "Brand Guidelines",
  //   "Copywriting",
  // ];
  const { t } = useTranslation();
  return (
    <div className="flex flex-col max-sm:gap-y-10 gap-y-25">
      <ScrollToTop />
      <section className="high:h-[calc(50vh)] flex w-fit h-fit bg-[url('/images/Services/CreativeTechnology/CreativeFond.webp')] high:bg-[url('/images/Services/CreativeTechnology/CreativeFond.webp')] bg-cover bg-no-repeat bg-center">
        <section className="high:h-[calc(50vh)] flex flex-col gap-y-12.5 px-20 py-5 max-sm:pt-0 w-screen h-screen scroll-smooth bg-[rgba(0,0,0,0.5)]">
          <Header />
          <p className="m-auto text-4xl text-center uppercase">
            {" "}
            {t("services.creative.label")}
          </p>
        </section>
      </section>
      {/* <section className="text-black flex flex-col gap-y-12.5 w-full p-12.5">
        <p className="uppercase text-4xl font-bold">{t("services.title")}</p>
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
            src="/images/Services/CreativeTechnology/Creative1.webp White.webp"
            className="min-w-70"
            alt="Colors"
          />
        </div>
      </section> */}
      <section className="text-black flex flex-col gap-y-12.5 w-full p-12.5">
        <p className="uppercase text-4xl font-bold">{t("services.overview")}</p>
        <div className="grid grid-cols-[repeat(4, auto)] grid-rows-[repeat(3, auto)] max-md:gap-2.5 gap-7.5 max-w-7xl self-center">
          <img
            src="/images/Services/CreativeTechnology/Creative1.webp"
            alt=""
            className="col-[1/3] grow row-start-1 aspect-630/660 object-cover rounded-r1 max-sm:rounded-r3"
            loading="lazy"
          />
          <img
            src="/images/Services/CreativeTechnology/Creative2.webp"
            alt=""
            className="col-start-3 grow row-start-1 aspect-300/660 object-cover rounded-r1 max-sm:rounded-r3"
            loading="lazy"
          />
          <img
            src="/images/Services/CreativeTechnology/Creative3.webp"
            alt=""
            className="col-start-4 grow row-start-1 aspect-300/660 object-cover rounded-r1 max-sm:rounded-r3"
            loading="lazy"
          />
          <img
            src="/images/Services/CreativeTechnology/Creative4.webp"
            alt=""
            className="col-[1/3] row-start-2 aspect-630/760 object-cover rounded-r1 max-sm:rounded-r3"
            loading="lazy"
          />
          <img
            src="/images/Services/CreativeTechnology/Creative5.webp"
            alt=""
            className="col-[3/5] row-start-2 aspect-630/760 object-cover w-full rounded-r1 max-sm:rounded-r3"
            loading="lazy"
          />
          <img
            src="/images/Services/CreativeTechnology/Creative6.webp"
            alt=""
            className="col-[1/3]  row-start-3 aspect-630/360 object-cover rounded-r1 max-sm:rounded-r3"
            loading="lazy"
          />
          <img
            src="/images/Services/CreativeTechnology/Creative7.webp"
            alt=""
            className="col-[3/5] row-start-3 aspect-630/360 object-cover rounded-r1 max-sm:rounded-r3"
            loading="lazy"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
