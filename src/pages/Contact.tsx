import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <div className="bg-linear-to-r from-visuance-gradient-blue to-black top flex flex-col gap-y-12.5 px-20 py-12.5 w-full scroll-smooth">
        <Header />
        <div className="w-full h-fit flex flex-col items-center backdrop-blur-2xl bg-light-gray/20 px-16 py-12 rounded-[50px] text-2xl">
          <span>Let's get in touch</span>
          <div className="w-140 flex flex-col gap-y-18.75">
            <div className="flex wrap w-full">
              <div>
                <label htmlFor="firstName">Firstname</label>
                <input type="text" id="firstName" />
              </div>
              <label htmlFor="lastName">Lastname</label>
              <input type="text" id="lastName" />
              <label htmlFor="email">Email</label>
              <input type="text" id="Email" />
              <label htmlFor="email">Company</label>
              <input type="text" id="Email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="" id="message"></textarea>
            </div>
            <button>Send</button>
          </div>
          <span>We stay reachable !</span>
          <div className="flex fex-col gap-y-2.5">
            <span>Mail: contact@visuance-playtosky.com</span>
            <span>Phone: 01 25 47 54 12</span>
            <span>Adresse: 56 avenue Monceau 75008 Paris</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
