import { useState } from "react";

export default function ContactForm() {
  const [subject, setSubject] = useState("");

  return (
    <form className="md:col-span-7 flex flex-col gap-5 text-xs font-medium text-white/90 ">
      {/* Ligne 1 : Nom & Prénom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lastname">Firstname</label>
          <input
            type="text"
            id="lastname"
            placeholder="Dupond"
            className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-white/30 focus:outline-none focus:border-white text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstname">Lastname</label>
          <input
            type="text"
            id="firstname"
            placeholder="Arnold"
            className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-white/30 focus:outline-none focus:border-white text-sm"
          />
        </div>
      </div>

      {/* Ligne 2 : Email & Nom de l'entreprise */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="a.dupond@gmail.com"
            className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-white/30 focus:outline-none focus:border-white text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company">Company name</label>
          <input
            type="text"
            id="company"
            placeholder="SNCF Connect"
            className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-white/30 focus:outline-none focus:border-white text-sm"
          />
        </div>
      </div>

      {/* Ligne 3 : Téléphone & Sujet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="06 12 34 56 78"
            className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-white/30 focus:outline-none focus:border-white text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject">Subject</label>
          <div className="relative">
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-white/90 appearance-none focus:outline-none focus:border-white text-sm"
            >
              <option value="" disabled className="text-white/50 bg-black/75">
                Select a subject
              </option>
              <option value="representation" className="text-white bg-black/75">
                Brand Strategy and Identity
              </option>
              <option value="partnership" className="text-white bg-black/75">
                Web design and development
              </option>
              <option value="partnership" className="text-white bg-black/75">
                Print Design
              </option>
              <option value="partnership" className="text-white bg-black/75">
                Video / Photography
              </option>
              <option value="partnership" className="text-white bg-black/75">
                AI Innovation
              </option>
              <option value="partnership" className="text-white bg-black/75">
                Digital Product and Experience Design
              </option>
              <option value="partnership" className="text-white bg-black/75">
                Brand Storytelling and Content
              </option>
              <option value="partnership" className="text-white bg-black/75">
                Growth Technology and Optimisation
              </option>
              <option value="partnership" className="text-white bg-black/75">
                Creative Technology
              </option>
              <option value="other" className="text-white bg-black/75">
                Other Inquiry
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none font-bold text-grey/10">
              ﹀
            </div>
          </div>
        </div>
      </div>

      {/* Ligne 4 : Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Message"
          className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-white/30 focus:outline-none focus:border-white text-sm resize-none"
        ></textarea>
      </div>

      {/* Bouton d'envoi aligné au centre */}
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-white text-black font-regular tracking-wider px-10 py-3 rounded-lg shadow-md hover:bg-pulse-pink hover:text-gray-white transition-all duration-300 text-sm cursor-pointer"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
