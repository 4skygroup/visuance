import ContactForm from "../components/ContactForm.tsx/ContactForm";
import ContactInfoCards from "../components/ContactForm.tsx/ContactInfoCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { useSEO } from "../hooks/useSEO";
import { useTranslation } from "react-i18next";

export default function Contact() {
  useSEO({
    title: "Contact | Visuance Creative Studio – Paris",
    description:
      "Get in touch with Visuance. Reach us at contact@visuance-playtosky.com, by phone at 01 25 47 54 12, or visit us at 56 avenue Monceau, 75008 Paris.",
    canonical: "https://visuanceagency.com/contact",
  });
  const { t } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <div className="bg-linear-to-r from-visuance-gradient-blue to-black top flex flex-col max-md:gap-y-5 px-20 py-5 max-md:pt-0 w-full scroll-smooth">
        <Header />
        <div className="w-full min-h-[calc(90vh-100px)] py-3 max-sm-px-0 sm:px-4 md:px-8 flex items-center justify-center">
          {/* Cadre principal arrondi de la maquette */}
          <div className="max-w-6xl w-full bg-white/10 backdrop-blur-md p-4 md:p-6 shadow-sm border border-white relative">
            {/* Titre de la page */}
            {/* <h1 className="text-3xl md:text-4xl text-center uppercase tracking-wide mb-2 text-white drop-shadow-sm">
                    Contact us
                </h1> */}

            {/* Grille : Logo à gauche / Formulaire à droite */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
              {/* ── Left column ── */}
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="text-t4 font-bold leading-tight tracking-tight text-white md:text-h7">
                    {t("contact.catchPhrase")}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
                    {t("contact.detailedPhrase")}
                  </p>
                </div>

                <ContactInfoCards />
              </div>

              {/* ── Right column ── */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
