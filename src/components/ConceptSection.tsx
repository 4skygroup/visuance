import { Link } from "react-router";
import type { ConceptSectionType } from "../types/content";

export default function ConceptSection({
  className,
  additionnalClassName,
  catchphrase,
  link,
  src,
  alt,
  index,
}: ConceptSectionType) {
  return (
    <section
      className={
        additionnalClassName
          ? `${className} ${additionnalClassName} group ${(index === "ai" || index === "digital") && ""}`
          : `${className} group ${index === "drox360" && "border-b-white border-b-2 border-b-solid"}`
      }
      id={index}
    >
      <div className="flex flex-col gap-2.5 ">
        <h2 className="text-3xl">{catchphrase}</h2>
        <Link
          to={link}
          className="text-base text-light-gray hover:text-dark-gray"
        >
          View Projects &gt;
        </Link>
      </div>
      <img
        src={src}
        alt={alt}
        className={`max-h-full object-cover object-bottom-left scale-105 transition-transform ${index === "ai" || index === "digital" ? "self-end" : ""} ${index === "print" || index === "video" ? "w-75" : "w-100"}`}
      />
    </section>
  );
}
