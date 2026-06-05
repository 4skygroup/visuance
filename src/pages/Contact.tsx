import ContactForm from "../components/ContactForm.tsx/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo/Logo";
import { useSEO } from "../hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact | Visuance Creative Studio – Paris",
    description:
      "Get in touch with Visuance. Reach us at contact@visuance-playtosky.com, by phone at 01 25 47 54 12, or visit us at 56 avenue Monceau, 75008 Paris.",
    canonical: "https://visuanceagency.com/contact",
  });
  return (
    <div>
      <div className="bg-linear-to-r from-visuance-gradient-blue to-black top flex flex-col gap-y-0 px-20 py-5 max-sm:pt-0 w-full scroll-smooth">
        <Header />
        <div className="w-full min-h-[calc(90vh-100px)] py-3 px-4 md:px-8 flex items-center justify-center">
          {/* Cadre principal arrondi de la maquette */}
          <div className="max-w-6xl w-full mx-auto bg-white/10 backdrop-blur-md p-4 md:p-6 shadow-sm border border-white relative">
            {/* Titre de la page */}
            {/* <h1 className="text-3xl md:text-4xl text-center uppercase tracking-wide mb-2 text-white drop-shadow-sm">
                    Contact us
                </h1> */}

            <p className="text-2xl md:text-3xl text-right mb-2 tracking-wide text-white drop-shadow-sm">
              Let&apos;s start your strategy !
            </p>

            {/* Grille : Logo à gauche / Formulaire à droite */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* CÔTÉ GAUCHE : Énorme Logo textuel centré verticalement */}
              <div className="md:col-span-5 flex justify-center items-center p-4">
                <Logo
                  src="/images/Visuance Logo.png"
                  alt="Logo Visuance Logo"
                  className="w-full max-w-70 md:max-w-full h-auto object-contain drop-shadow-sm"
                />
              </div>

              {/* CÔTÉ DROIT : Le Formulaire complet */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
