import { Link } from "react-router";
import ConceptSection from "../components/ConceptSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSEO } from "../hooks/useSEO";
import type { ConceptSectionType } from "../types/content";
import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from "react-i18next";

export default function Home() {
  useSEO({
    title: "Visuance – Creative Studio | Brand Strategy, Web & Digital Design",
    description:
      "Visuance is a full-service creative studio. We design brand identities, web experiences, print, video, AI solutions and digital products that make your vision stand out.",
    canonical: "https://visuanceagency.com/",
  });
  const conceptSectionsClassName =
    "flex w-full h-131.25 px-25 items-center justify-between gap-10 overflow-hidden max-sm:flex-col max-sm:items-center max-sm:py-10 max-sm:text-center";
  const conceptSections: ConceptSectionType[] = [
    {
      src: "/images/Identity.webp",
      alt: "Identity",
      catchphrase: "home.services.strategy",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-red-strong-light from-70% to-gradient-red-strong-dark",
      link: "/brand-strategy",
      index: "identity",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Web.webp",
      alt: "Web",
      catchphrase: "home.services.web",
      className: conceptSectionsClassName,
      additionnalClassName: "bg-black",
      link: "/web-design",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Print.webp",
      alt: "Print",
      catchphrase: "home.services.print",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-red-light to-gradient-red-dark",
      link: "/print-design",
      index: "print",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Video.webp",
      alt: "Video",
      catchphrase: "home.services.video",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-orange-light from-42% to-gradient-orange-dark",
      link: "/video-photography",
      index: "video",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/AI.webp",
      alt: "AI",
      catchphrase: "home.services.ai",
      className: conceptSectionsClassName,
      additionnalClassName: "bg-black",
      link: "/ai-innovation",
      index: "ai",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Digital.webp",
      alt: "Digital",
      catchphrase: "home.services.digital",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-blue-light to-gradient-blue-dark",
      link: "/digital-product",
      index: "digital",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Story Telling.webp",
      alt: "StoryTelling",
      catchphrase: "home.services.storytelling",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-red-light to-gradient-red-dark",
      link: "/brand-storytelling",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Growth.webp",
      alt: "Growth",
      catchphrase: "home.services.growth",
      className: conceptSectionsClassName,
      additionnalClassName: "bg-brown-light",
      link: "/growth-technology",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Creativity.webp",
      alt: "Creativity",
      catchphrase: "home.services.creative",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-r from-gradient-green-light from-57% to-gradient-green-dark from-75%",
      link: "/creative-technology",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="relative">
      <ScrollToTop />
      <div className="bg-linear-to-r from-visuance-gradient-blue to-black top flex flex-col gap-y-5 px-20 py-5 max-sm:pt-0 w-full scroll-smooth lg:h-screen">
        <Header />

        {/* Second section top */}
        <div className="overflow-hidden max-sm:pt-12.5 max-sm:rounded-none max-sm:px-0 max-sm:-mx-20 max-lg:flex-col max-lg:items-center max-lg:h-fit relative xs:max-sm:w-lg sm:max-md:w-xl md:max-lg:w-3xl lg:max-xl:w-5xl xl:w-7xl h-145 flex grow px-12.5 backdrop-blur-2xl bg-light-gray/20 pl-16 pt-5 rounded-[50px] gap-x-12.5 self-center sm:max-lg:px-0">
          <div className="max-md:items-center max-md:gap-y-10 flex flex-col gap-y-3 h-full">
            <img
              src="/images/Visuance Logo.webp"
              alt="Visuance Logo"
              className="max-sm:hidden w-52.5 h-17.5"
              loading="lazy"
            />
            <div className="flex flex-col gap-y-5 max-sm:pb-9 pb-3">
              <img
                src="/images/Branding Outdated.webp"
                alt="Branding Image"
                className="w-55"
                loading="lazy"
              />
              <div className="w-full justify-between flex bg-white/70 px-8.75 py-2.5 rounded-full">
                <span className="uppercase text-white font-bold text-lg">
                  {t("home.news")}
                </span>
                <span className="capitalize text-dark-gray text-base">
                  {t("home.today")}
                </span>
              </div>
            </div>
          </div>
          <div className="max-md:items-center max-lg:static max-md:self-center fixed bottom-0 right-0 flex flex-col gap-y-5 pt-5 w-fit h-full -z-10">
            <p className="max-sm:text-center max-sm:px-5 text-2xl max-w-170">
              {t("home.catchPhrase")}
            </p>
            <div className="max-sm:rounded-none max-md:-mx-12.5 max-md:w-full flex flex-col gap-y-5 pb-9 xs:max-sm:w-120 sm:max-md:w-150 md:max-lg:w-180 lg:w-full justify-between bg-[url(/images/News.webp)] bg-cover bg-no-repeat bg-center px-7.5 py-6.25 rounded-[50px] rounded-tr-none h-[calc(90%)] sm:max-lg:aspect-430/265 2xl:aspect-430/265 sm:max-lg:rounded-tr-[50px] max-w-200">
              <div className="w-fit invisible flex flex-col items-center">
                <img
                  src="/images/Visuance Logo.webp"
                  alt="Visuance Logo"
                  className="w-52.5 h-17.5"
                  loading="lazy"
                />
                <span>PRODUCTION</span>
              </div>
              <div className="flex self-end gap-x-2.5">
                <a
                  href="#identity"
                  className="w-fit h-12.5 p-5 bg-black rounded-full flex items-center justify-center uppercase"
                >
                  {t("home.fields")}
                </a>
                <a
                  href="#identity"
                  className="w-12.5 h-12.5 aspect-square bg-black rounded-full flex"
                >
                  <svg
                    width="11"
                    height="14"
                    className="m-auto"
                    viewBox="0 0 11 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0310984 13.2533C0.121673 13.5354 0.419812 13.7929 0.800979 13.9216C0.993449 13.9846 1.07648 13.9983 1.3482 13.9956C1.95203 13.9956 1.54444 14.2585 6.4128 10.7306C9.34892 8.60235 10.7717 7.55329 10.8358 7.46838C10.983 7.26843 11.0359 7.03561 10.9755 6.82744C10.9491 6.73431 10.8849 6.6001 10.8358 6.53162C10.7717 6.44671 9.34892 5.39765 6.4128 3.26939C1.54444 -0.258525 1.95203 0.00442505 1.3482 0.00442505C1.07648 0.00442505 0.993448 0.0153818 0.79343 0.0811195C0.0990286 0.311201 -0.195337 0.924752 0.14809 1.426C0.197151 1.49722 1.53689 2.48876 3.9824 4.26641L7.745 7L3.9824 9.73359C1.52557 11.5195 0.197151 12.5028 0.14809 12.574C0.00845432 12.7822 -0.0368319 13.0396 0.0310984 13.2533Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Link Section */}
        <Link
          to="/contact"
          className="max-sm:rounded-none max-sm:-mx-20 max-sm:flex-col max-sm:gap-y-15 backdrop-blur-2xl bg-light-gray/20 sm:w-full flex items-center justify-between sm:pl-15 sm:pr-5 py-5 rounded-full xl:w-[calc(90%)] xl:self-center xl:max-w-360 xl:min-w-7xl"
        >
          <div className="flex flex-col gap-y-4">
            <p className="max-sm:text-center text-3xl sm:max-md:text-xl">
              {t("home.ctaTop")}
            </p>
            <p className="max-sm:text-center text-xl sm:max-md:text-lg">
              {t("home.ctaBottom")}
            </p>
          </div>
          <img
            src="/images/Link.webp"
            alt="Link"
            loading="lazy"
            className="sm:max-md:w-20"
          />
        </Link>
      </div>
      {conceptSections.map((section, index) => (
        <ConceptSection
          key={index}
          src={section.src}
          alt={section.alt}
          catchphrase={t(section.catchphrase)}
          className={section.className}
          additionnalClassName={section.additionnalClassName}
          link={section.link}
          index={section.index}
        />
      ))}
      <Footer />
    </div>
  );
}
