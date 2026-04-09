import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <div className="bg-linear-to-r from-visuance-gradient-blue to-black top flex flex-col gap-y-12.5 px-20 py-12.5 w-full scroll-smooth">
        <Header />
        <div className="max-sm:-mx-20 max-sm:rounded-none sm:w-full h-fit flex flex-col items-center backdrop-blur-2xl bg-light-gray/20 px-16 py-12 rounded-[50px] text-2xl gap-y-12.5">
          <div className="max-md:w-100 md:w-140 flex flex-col gap-y-18.75 items-center">
            <span className="text-4xl">Let's get in touch !</span>
            <div className="sm:max-md:justify-center max-sm:flex-col flex flex-wrap w-fit max-md:gap-x-15 gap-x-25 gap-y-10">
              <div className="flex flex-col gap-y2.5 text-base">
                <label htmlFor="firstName">Firstname</label>
                <input
                  type="text"
                  id="firstName"
                  className="border-white border border-solid rounded-sm outline-none w-57.5 h-7.5 px-2"
                />
              </div>
              <div className="flex flex-col gap-y2.5 text-base">
                <label htmlFor="lastName">Lastname</label>
                <input
                  type="text"
                  id="lastName"
                  className="border-white border border-solid rounded-sm outline-none w-57.5 h-7.5 px-2"
                />
              </div>
              <div className="flex flex-col gap-y2.5 text-base">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="Email"
                  className="border-white border border-solid rounded-sm outline-none w-57.5 h-7.5 px-2"
                />
              </div>
              <div className="flex flex-col gap-y2.5 text-base">
                <label htmlFor="email">Company</label>
                <input
                  type="text"
                  id="Email"
                  className="border-white border border-solid rounded-sm outline-none w-57.5 h-7.5 px-2"
                />
              </div>
              <div className="sm:max-md:grow-0 w-57.5 sm:max-md:w- flex flex-col gap-y2.5 grow text-base">
                <label htmlFor="message">Message</label>
                <textarea
                  name=""
                  id="message"
                  className="border-white border border-solid rounded-sm resize-none outline-none h-27.5 px-2.5 py-1.25"
                ></textarea>
              </div>
            </div>
            <button className="bg-white rounded-sm text-black w-fit text-base py-2.5 px-5 cursor-pointer">
              Send
            </button>
          </div>
          <span className="text-center">We stay reachable !</span>
          <div className="flex flex-col gap-y-5 items-center">
            <span className="text-center">
              Mail: contact@visuance-playtosky.com
            </span>
            <span className="text-center">Phone: 01 25 47 54 12</span>
            <span className="text-center">
              Adresse: 56 avenue Monceau 75008 Paris
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
