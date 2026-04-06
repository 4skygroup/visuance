import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <div>
      <div className="bg-linear-to-r from-visuance-gradient-blue to-black top flex flex-col gap-y-12.5 px-20 py-12.5 w-full scroll-smooth">
        <Header />
        <div className="w-full h-fit flex backdrop-blur-2xl bg-light-gray/20 px-16 py-12 rounded-[50px] text-2xl">
          <p className="flex flex-col gap-y-5 text-center max-w-5xl m-auto">
            <span>
              Behind every strong brand identity lies a passionate team.
            </span>
            <span>
              Our studio brings together creative and technical professionals
              who share the same vision: to design cohesive, useful, and
              memorable visual experiences. Designers, strategists, and
              developers work hand in hand to transform ideas into vibrant
              brands and high-performing digital products.
            </span>
            <span>
              Art directors set the tone and ensure the aesthetic consistency of
              each project. Designers shape visual worlds, imagine brand
              identities, and create interfaces that are both elegant and
              intuitive. Brand strategists analyze the challenges, clarify the
              messaging, and build solid foundations so that each identity is
              meaningful and impactful.
            </span>
            <span>
              Alongside them, developers bring concepts to life. They transform
              mockups into seamless, high-performing, and sustainable
              interactive experiences. Their technical expertise ensures that
              every creation is not only beautiful but also functional and
              scalable.
            </span>
            <span>
              What sets us apart is our way of working: through constant
              collaboration. Ideas flow freely, skills complement each other,
              and every project benefits from a collective perspective. This
              synergy allows us to combine creativity, rigor, and innovation.
            </span>
            <span>
              Our team is not just made up of specialists: they are explorers,
              artisans of detail, and partners committed to our clients'
              success.
            </span>
            <span>
              Together, we create identities that tell a story, designs that
              captivate, and digital experiences that last.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
