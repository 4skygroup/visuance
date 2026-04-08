import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [burgerClicked, setBurgerClicked] = useState(false);

  const handleBurgerClicked = () => {
    setBurgerClicked(!burgerClicked);
  };

  return (
    <header className="max-sm:-mx-20 max-sm:px-0 max-sm:rounded-none backdrop-blur-2xl bg-light-gray/20 sm:w-full flex items-center justify-between sm:max-md:px-5  px-12.5 py-5 rounded-full">
      <Link to="/">
        <img
          src="/images/Visuance Logo.png"
          alt="Visuance Logo"
          className="aspect-3/1 w-52.5 h-17.5"
        />
      </Link>
      <nav className="block max-sm:hidden">
        <ul className="flex gap-x-12.5 text-base">
          <li>
            <Link to="/the-group">The Group</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div
        className="max-sm:flex hidden pr-7"
        onClick={() => handleBurgerClicked()}
      >
        <svg
          width="50"
          height="39"
          viewBox="0 0 50 39"
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
          className={`${burgerClicked ? "flex" : "hidden"} w-screen h-screen bg-white fixed inset-0 z-30 bg-linear-to-r from-visuance-gradient-blue to-black`}
        >
          <svg
            width="40"
            height="40"
            className="absolute top-10 right-10"
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

          <ul className="flex flex-col gap-y-10 text-base m-auto">
            <li>
              <Link
                to="/the-group"
                className="text-white uppercase text-2xl hover:text-dark-gray"
              >
                The Group
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white uppercase text-2xl hover:text-dark-gray"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white uppercase text-2xl hover:text-dark-gray"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
