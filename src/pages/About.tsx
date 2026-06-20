import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { useSEO } from "../hooks/useSEO";

export default function About() {
  useSEO({
    title: "About Us | Visuance Creative Studio",
    description:
      "Behind every strong brand identity lies a passionate team. Visuance brings together designers, strategists and developers to craft cohesive, memorable visual experiences.",
    canonical: "https://visuanceagency.com/about",
  });
  const { t } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <div className="bg-linear-to-r from-visuance-gradient-blue to-black top flex flex-col gap-y-12.5 px-20 py-5 max-sm:pt-0 w-full scroll-smooth">
        <Header />
        <div className="max-sm:-mx-20 max-sm:rounded-none sm:w-full h-fit flex flex-col gap-12.5 backdrop-blur-2xl bg-light-gray/20 px-16 py-12 rounded-[50px] text-2xl">
          <p className="text-center text-5xl">{t("about.title")}</p>
          <p className="flex flex-col gap-y-7 text-center max-w-5xl m-auto">
            <span>{t("about.sentence1")}</span>
            <span>{t("about.sentence2")}</span>
            <span>{t("about.sentence3")}</span>
            <span>{t("about.sentence4")}</span>
            <span>{t("about.sentence5")}</span>
            <span>{t("about.sentence6")}</span>
            <span>{t("about.sentence7")}</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
