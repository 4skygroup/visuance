import ConceptSection from "../components/ConceptSection";
import Footer from "../components/Footer";
import type { ConceptSectionType } from "../types/content";

export default function Home() {
  const conceptSectionsClassName =
    "flex w-full h-131.25 px-25 items-center justify-between gap-10";
  const conceptSections: ConceptSectionType[] = [
    {
      src: "/images/Identity.png",
      alt: "Identity",
      catchphrase: "Brand Strategy & identity",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-red-strong-light from-70% to-gradient-red-strong-dark",
      link: "",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Web.png",
      alt: "Web",
      catchphrase: "Web design and development",
      className: conceptSectionsClassName,
      additionnalClassName: "bg-black",
      link: "",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Print.png",
      alt: "Print",
      catchphrase: "Print Design",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-red-light to-gradient-red-dark",
      link: "",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Video.png",
      alt: "Video",
      catchphrase: "Video / Photography",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-orange-light from-42% to-gradient-orange-dark",
      link: "",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/AI.png",
      alt: "AI",
      catchphrase: "AI Innovation",
      className: conceptSectionsClassName,
      additionnalClassName: "bg-black",
      link: "",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Digital.png",
      alt: "Digital",
      catchphrase: "Digital Product and Experience Design",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-blue-light to-gradient-blue-dark",
      link: "",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/StoryTelling.png",
      alt: "StoryTelling",
      catchphrase: "Brand Storytelling and Content",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-b from-gradient-red-light to-gradient-red-dark",
      link: "",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Growth.png",
      alt: "Growth",
      catchphrase: "Growth Techniology and Optimisation",
      className: conceptSectionsClassName,
      additionnalClassName: "bg-brown-light",
      link: "",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
    {
      src: "/images/Creativity.png",
      alt: "Creativity",
      catchphrase: "Creative Technology",
      className: conceptSectionsClassName,
      additionnalClassName:
        "bg-linear-to-r from-gradient-green-light from-57% to-gradient-green-dark from-75%",
      link: "",
      // additionnalClassName: "bg-[#F5F5F5]",
    },
  ];
  return (
    <div className="home">
      {conceptSections.map((section, index) => (
        <ConceptSection
          key={index}
          src={section.src}
          alt={section.alt}
          catchphrase={section.catchphrase}
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
