import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import ToggleLanguage from "./Language/ToggleLanguage";

export default function Header() {
  const [burgerClicked, setBurgerClicked] = useState(false);
  // const [languagesOpen, setLanguagesOpen] = useState<boolean>(false);
  const [mobileLanguagesOpen, setMobileLanguagesOpen] =
    useState<boolean>(false);
  // const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { t, i18n } = useTranslation();

  const [languages, setLanguages] = useState([
    {
      language: "English",
      label: "en",
      active: false,
    },
    {
      language: "Français",
      label: "fr",
      active: true,
    },
  ]);

  // const handleMouseEnter = () => {
  //   if (timeoutRef.current) clearTimeout(timeoutRef.current);
  //   setLanguagesOpen(true);
  // };
  // const handleMouseLeave = () => {
  //   timeoutRef.current = setTimeout(() => setLanguagesOpen(false), 150);
  // };

  const handleBurgerClicked = () => {
    setBurgerClicked(!burgerClicked);
  };

  return (
    <header
      className={`relative z-20 w-full max-md:-mx-20 max-md:px-0 max-md:rounded-none ${burgerClicked ? "" : "backdrop-blur-2xl"} bg-light-gray/20 max-md:w-screen flex items-center max-md:justify-end justify-between sm:max-md:px-5 xl:w-[calc(90%)] xl:self-center xl:max-w-360 xl:min-w-7xl md:max-lg:px-5 px-10 py-3 rounded-full`}
    >
      <ul className="hidden md:flex items-center gap-10">
        <Link to="/locations">
          <svg
            className=""
            width="20"
            height="27"
            viewBox="0 0 20 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.30327 0.0134938C8.06613 0.150709 7.35841 0.29848 6.55886 0.588743C4.44112 1.36454 2.66914 2.78418 1.46441 4.67881C0.329905 6.46788 -0.194127 8.7847 0.0651878 10.8535C0.486574 14.1836 2.91765 18.775 6.94783 23.8625C7.89865 25.0658 9.12499 26.5066 9.40592 26.7546C9.77868 27.0818 10.2325 27.0818 10.6052 26.7546C10.8862 26.5066 12.1125 25.0658 13.0633 23.8625C16.6883 19.2869 19.0168 15.1283 19.7515 11.8984C19.9406 11.0699 20 10.5316 20 9.66605C19.9946 7.13284 18.9573 4.71047 17.0827 2.88445C15.5376 1.36981 13.717 0.456805 11.5723 0.113767C11.0645 0.0346044 9.67063 -0.0287262 9.30327 0.0134938ZM10.6377 4.89518C12.6528 5.15906 14.3221 6.57343 14.8677 8.47861C15.0136 8.97997 15.0676 9.98797 14.9812 10.5368C14.7273 12.099 13.6792 13.4711 12.1935 14.1783C11.3184 14.5952 10.4216 14.7536 9.50856 14.6533C8.79545 14.5741 8.43349 14.4738 7.81762 14.1783C6.33196 13.4711 5.28389 12.099 5.02998 10.5368C4.94354 9.98797 4.99757 8.97997 5.14343 8.47861C5.81873 6.12484 8.20119 4.56798 10.6377 4.89518Z"
              fill="white"
            />
          </svg>
        </Link>

        <ToggleLanguage />
      </ul>

      <Link to="/" className="absolute -translate-x-1/2 left-1/2">
        <img
          src="/images/Visuance Logo.webp"
          alt="Visuance Logo"
          className="aspect-3/1 w-37 object-center object-cover"
          loading="lazy"
        />
      </Link>
      <nav className="block max-md:hidden">
        <ul className="flex gap-x-12.5 md:max-lg:gap-x-7 text-base">
          <li className="md:max-lg:text-t6">
            <a href="https://www.playtosky.com/">{t("header.group")}</a>
          </li>
          <li className="md:max-lg:text-t6">
            <Link to="/about">{t("header.about")}</Link>
          </li>
          <li className="md:max-lg:text-t6">
            <Link to="/contact">{t("header.contact")}</Link>
          </li>
          {/* <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="uppercase flex items-center justify-center gap-1 md:max-lg:text-t6">
              {languages.filter((lang) => lang.active)[0].label}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${languagesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {languagesOpen && (
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-snackly-purple border border-white/10 rounded-md py-2 w-44 shadow-lg z-100">
                {languages.map((lang) => (
                  <li
                    key={lang.language}
                    className={`block px-4 py-2 font-glacial text-t6 transition-colors duration-200 text-white hover:text-gray-white hover:bg-white/5`}
                    onClick={() => {
                      i18n.changeLanguage(lang.label);
                      setLanguages(
                        languages.map((language) => {
                          if (language.label === lang.label) {
                            return { ...language, active: true };
                          }
                          return { ...language, active: false };
                        }),
                      );
                    }}
                  >
                    {lang.language}
                  </li>
                ))}
              </ul>
            )}
          </li> */}
        </ul>
      </nav>
      <div
        className="max-md:flex max-sm:items-center hidden pr-7"
        onClick={() => handleBurgerClicked()}
      >
        <svg
          width="50"
          height="39"
          viewBox="0 0 50 39"
          className="w-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.22034 35.0645C1.92062 34.8311 47.6804 34.7843 48.5201 35.0176C49.7497 35.36 50.3258 36.5592 49.8121 37.711C49.237 39.0178 51.3966 38.9092 24.8785 38.9092C-1.19063 38.9092 0.659705 38.9868 0.193 37.8975C-0.289491 36.7146 0.16199 35.4225 1.22034 35.0645Z"
            fill="white"
          />
          <path
            d="M1.22034 17.6328C1.92066 17.3994 47.6849 17.3526 48.5201 17.586C49.7497 17.9284 50.3258 19.1266 49.8121 20.2783C49.2364 21.5857 51.3994 21.4766 24.8785 21.4766C-1.19178 21.4766 0.659931 21.5544 0.193 20.4649C-0.28929 19.2821 0.162176 17.9909 1.22034 17.6328Z"
            fill="white"
          />
          <path
            d="M1.22034 0.200223C1.92062 -0.0332039 47.6804 -0.0799858 48.5201 0.153348C49.7497 0.495764 50.3258 1.69494 49.8121 2.84671C49.237 4.15359 51.3966 4.04495 24.8785 4.04495C-1.19063 4.04495 0.659705 4.12259 0.193 3.03323C-0.289491 1.85035 0.16199 0.558219 1.22034 0.200223Z"
            fill="white"
          />
        </svg>

        <nav
          className={`${burgerClicked ? "flex" : "hidden"} w-screen h-screen max-sm:h-dvh fixed inset-0 z-10 bg-linear-to-r from-visuance-gradient-blue to-black`}
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            className="absolute top-6 right-10 w-6.25"
            onClick={() => handleBurgerClicked()}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.0149 0.0921113C37.89 0.136734 33.7877 4.17959 28.9006 9.07921L20.0003 17.9771L11.1089 9.07921C1.43277 -0.595087 2.04812 -0.0328335 1.20982 0.12781C0.77283 0.208131 0.237743 0.743609 0.15748 1.18092C-0.00304652 2.01983 -0.564888 1.40403 9.10235 11.0783L17.9937 19.9851L9.05776 28.9276C-0.636233 38.6465 -0.0922277 38.0396 0.0593803 38.8696C0.139643 39.2891 0.710403 39.8603 1.12955 39.9406C1.95894 40.0923 1.35251 40.6367 11.0554 30.9356L20.0003 21.9931L28.9362 30.9356C38.657 40.6545 38.0416 40.0923 38.8799 39.9317C39.3169 39.8513 39.852 39.3159 39.9323 38.8785C40.0928 38.0396 40.6547 38.6554 30.9428 28.9365L22.0069 19.9851L30.9428 11.0426C40.6279 1.34156 40.0928 1.93058 39.9412 1.10952C39.7896 0.297378 38.8086 -0.220251 38.0149 0.0921113Z"
              fill="white"
            />
          </svg>

          <ul className="flex flex-col items-center gap-y-10 text-base m-auto">
            <li>
              <Link
                to="/"
                className="text-white uppercase text-2xl hover:text-dark-gray"
              >
                {t("header.home")}
              </Link>
            </li>
            <li className="text-white uppercase text-2xl hover:text-dark-gray">
              <a href="https://www.playtosky.com/">{t("header.group")}</a>
            </li>
            <li>
              <Link
                to="/locations"
                className="text-white uppercase text-2xl hover:text-dark-gray"
              >
                {t("header.locations")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white uppercase text-2xl hover:text-dark-gray"
              >
                {t("header.about")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white uppercase text-2xl hover:text-dark-gray"
              >
                {t("header.contact")}
              </Link>
            </li>
            <li>
              <button
                onClick={() => setMobileLanguagesOpen((prev) => !prev)}
                className="font-glacial text-t3 text-white flex items-center gap-2 mx-auto uppercase cursor-pointer"
              >
                {languages.filter((lang) => lang.active)[0].label}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileLanguagesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <ul
                className={`overflow-hidden transition-all duration-300 flex flex-col items-center gap-3 ${mobileLanguagesOpen ? "max-h-40 mt-4" : "max-h-0"}`}
              >
                {languages.map((lang) => (
                  <li
                    key={lang.language}
                    className={`block px-4 py-2 font-glacial text-t4 transition-colors duration-200 text-white hover:text-gray-white hover:bg-white/5 cursor-pointer`}
                    onClick={() => {
                      i18n.changeLanguage(lang.label);
                      setLanguages(
                        languages.map((language) => {
                          if (language.label === lang.label) {
                            return { ...language, active: true };
                          }
                          return { ...language, active: false };
                        }),
                      );
                      handleBurgerClicked();
                    }}
                  >
                    {lang.language}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
