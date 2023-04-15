import React from "react";

import ImageHero from "../assets/hero-banner.png";
import BackgroundHero from "../assets/background.png";
import IconTravellers from "../assets/icons/icon-travellers.svg";
import IconCities from "../assets/icons/icon-cities.svg";
import IconAttractions from "../assets/icons/icon-attractions.svg";
import formatNumber from "../utils/formatNumber";

// import Button from "../components/Button/Button";

export default function Hero(props) {
  const showMostPicked = () => {
    // window.scrollTo({
    //   top: props.refMostPicked.current.offsetTop - 30,
    //   behavior: "smooth",
    // });
  };

  return (
    <section className="background-overlay flex w-screen flex-col items-center px-10 pt-4 font-poppins md:flex-row md:bg-transparent">
      <div className="z-10 flex flex-col pt-8  md:z-0 md:w-3/5 md:pr-10">
        <div className="">
          <h1 className="mb-4 text-[32px] font-bold text-secondary md:text-5xl md:leading-snug xl:text-6xl">
            Forget your busy life, <br />
            <span className="text-primary">start a vacation</span>
          </h1>
          <p className="mb-6 pr-16 text-base text-gray-800 md:text-lg md:leading-snug md:text-gray-400 lg:text-xl">
            We provide what you need to enjoy your vacation. Time to make{" "}
            another great memory with your loved ones.
          </p>
          {/* <Button
            className="btn bgbtb"
            // hasShadow
            // isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button> */}
          <button
            className="mb-6 cursor-pointer bg-primary p-4"
            onClick={showMostPicked}
          >
            Show Me
          </button>
        </div>

        <div className="mt-5 flex flex-row gap-x-12">
          <div className="col-auto flex flex-col items-center">
            <img
              src={IconTravellers}
              alt={`${props.data.travelers} Travelers`}
            />
            <h6 className="text-center text-sm font-medium md:text-base">
              {formatNumber(props.data.travelers)}{" "}
              <span className="font-light text-gray-800 md:text-gray-400">
                Travelers
              </span>
            </h6>
          </div>
          <div className="col-auto flex flex-col items-center">
            <img src={IconCities} alt={`${props.data.cities} Cities`} />
            <h6 className="text-center text-sm font-medium md:text-base">
              {formatNumber(props.data.cities)}{" "}
              <span className="font-light text-gray-800 md:text-gray-400">
                Cities
              </span>
            </h6>
          </div>
          <div className="col-auto flex flex-col items-center">
            <img
              src={IconAttractions}
              alt={`${props.data.attractions} Attractions`}
            />
            <h6 className="text-center text-sm font-medium md:text-base">
              {formatNumber(props.data.attractions)}{" "}
              <span className="font-light text-gray-800 md:text-gray-400">
                Attractions
              </span>
            </h6>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-2/5">
        <div className="h-fit">
          <img
            src={ImageHero}
            alt="Room with couches"
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
}
