import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Group() {
  return (
    <div>
      <div className="bg-linear-to-r from-visuance-gradient-blue to-black top flex flex-col gap-y-12.5 px-20 py-12.5 w-full scroll-smooth">
        <Header />
        <div className="w-full h-fit flex flex-col items-center backdrop-blur-2xl bg-light-gray/20 px-16 py-15 rounded-[50px] text-2xl gap-y-15">
          <img
            src="/images/Play To Sky-no-bg.png"
            alt="Play To Sky Logo"
            className="w-75 h-21.25"
          />
          <div className="flex flex-col gap-y-10">
            <div className="flex gap-x-3.75">
              <img src="/images/Visuance.png" alt="Image" className="w-31.25" />
              <img src="/images/Pulse X.png" alt="Image" className="w-31.25" />
              <img
                src="/images/Pulse X Agency Pink.png"
                alt="Image"
                className="w-31.25"
              />
              <img src="/images/Snackly.png" alt="Image" className="w-31.25" />
            </div>
            <div className="flex gap-x-3.75">
              <img src="/images/Seofy.png" alt="Image" className="w-31.25" />
              <img src="/images/CYBERSKY.png" alt="Image" className="w-31.25" />
              <img src="/images/Drox 360.png" alt="Image" className="w-31.25" />
              <img
                src="/images/Sky To Be Media.png"
                alt="Image"
                className="w-31.25"
              />
            </div>
          </div>
          <p className="max-w-105 text-center">
            One group with the same vision of creative technologies that aim to
            lift up your vision and projects.
          </p>
          <ul className="flex gap-x-12.5 underline text-dark-gray">
            <li>
              <a href="">Brand Identity</a>
            </li>
            <li>
              <a href="">Soical Media</a>
            </li>
            <li>
              <a href="">Influence</a>
            </li>
            <li>
              <a href="">Snack Content</a>
            </li>
          </ul>
          <ul className="flex gap-x-12.5 underline text-dark-gray">
            <li>
              <a href="">Optimization and Advertising</a>
            </li>
            <li>
              <a href="">IT Solutions</a>
            </li>
            <li>
              <a href="">Creative Energy</a>
            </li>
            <li>
              <a href="">Media Production</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
