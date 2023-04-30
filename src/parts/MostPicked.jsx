import React from "react";
import Button from "../components/Button/Button";

import { Fade } from "react-awesome-reveal";

function MostPicked({ data }) {
  return (
    <section className="px-16 pt-16 font-poppins">
      <h4 className="mb-8 text-2xl font-semibold">Most Picked</h4>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {data.map((item, index) => {
          return (
            <div
              className={`col-span-1 ${
                index == 0 ? "row-start-1 row-end-3" : "row-span-1"
              } overflow-hidden rounded-xl `}
              key={index}
            >
              <Fade down delay={400 * index}>
                <div className="h-ful relative ">
                  <Button type="link" href={`/properties/${item._id}`}>
                    <div className="absolute right-0 top-0 z-10 w-fit rounded-bl-2xl rounded-tr-lg border-transparent bg-pinkTag px-6 py-1 font-semibold text-white md:py-1.5">
                      ${item.price}
                      <span className="font-light">/{item.unit}</span>
                    </div>
                    <figure className="-z-10 h-full ">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full object-fill transition-transform hover:scale-105"
                      />
                    </figure>
                    <div className="overover absolute bottom-0 z-10 w-full py-4 pl-3 text-sm text-white md:text-base lg:text-xl">
                      <p>{item.name}</p>
                      <p className="text-sm md:text-base">
                        {item.city}, {item.country}
                      </p>
                    </div>
                  </Button>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MostPicked;
