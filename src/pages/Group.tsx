import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { useSEO } from "../hooks/useSEO";

export default function Group() {
  useSEO({
    title: "The Group | Visuance – Play To Sky Creative Ecosystem",
    description:
      "Discover the Play To Sky group: Visuance, Pulse X Agency, Snackly, Seofy, CYBERSKY, Drox 360, Sky To Be Media – one ecosystem uniting brand, media, IT and creative technologies.",
    canonical: "https://visuanceagency.com/the-group",
    ogImage: "https://visuanceagency.com/images/Play%20To%20Sky-no-bg.webp",
  });
  return (
    <>
      <ScrollToTop />
      <div className="bg-linear-to-r from-visuance-gradient-blue to-black top flex flex-col gap-y-12.5 px-20 py-5 max-sm:pt-0 w-full scroll-smooth">
        <Header />
        <div className="max-sm:-mx-20 max-sm:px-0 max-sm:rounded-none sm:w-full h-fit flex flex-col items-center backdrop-blur-2xl bg-light-gray/20 px-16 py-15 rounded-[50px] text-2xl gap-y-15">
          <img
            src="/images/Play To Sky-no-bg.webp"
            alt="Play To Sky Logo"
            loading="lazy"
            className="w-75 h-21.25"
          />
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-wrap items-center justify-center content-center gap-3.75">
              <img
                src="/images/Visuance.webp"
                alt="Visuance"
                loading="lazy"
                className="w-31.25"
              />
              <img
                src="/images/Pulse X.webp"
                alt="Pulse X"
                loading="lazy"
                className="w-31.25"
              />
              <img
                src="/images/Pulse X Agency Pink.webp"
                alt="Pulse X Agency"
                loading="lazy"
                className="w-31.25"
              />
              <img
                src="/images/Snackly.webp"
                alt="Snackly"
                loading="lazy"
                className="w-31.25"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center content-center gap-3.75">
              <img
                src="/images/Seofy.webp"
                alt="Seofy"
                loading="lazy"
                className="w-31.25"
              />
              <img
                src="/images/CYBERSKY.webp"
                alt="CYBERSKY"
                loading="lazy"
                className="w-31.25"
              />
              <img
                src="/images/Drox 360.webp"
                alt="Drox 360"
                loading="lazy"
                className="w-31.25"
              />
              <img
                src="/images/Sky To Be Media.webp"
                alt="Sky To Be Media"
                loading="lazy"
                className="w-31.25"
              />
            </div>
          </div>
          <p className="max-w-105 text-center p-5">
            One group with the same vision of creative technologies that aim to
            lift up your vision and projects.
          </p>
          <ul className="max-md:flex-col flex gap-y-10 max-md:text-center gap-x-12.5 underline text-dark-gray">
            <li>
              <a href="" className="block text-center">
                Brand Identity
              </a>
            </li>
            <li>
              <a href="" className="block text-center">
                Soical Media
              </a>
            </li>
            <li>
              <a href="" className="block text-center">
                Influence
              </a>
            </li>
            <li>
              <a href="" className="block text-center">
                Snack Content
              </a>
            </li>
          </ul>
          <ul className="max-md:flex-col flex gap-y-10 max-md:text-center gap-x-12.5 underline text-dark-gray">
            <li>
              <a href="" className="block text-center">
                Optimization and Advertising
              </a>
            </li>
            <li>
              <a href="" className="block text-center">
                IT Solutions
              </a>
            </li>
            <li>
              <a href="" className="block text-center">
                Creative Energy
              </a>
            </li>
            <li>
              <a href="" className="block text-center">
                Media Production
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
