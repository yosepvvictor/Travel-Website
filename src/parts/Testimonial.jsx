import React from "react";

import Star from "../components/Star/Star";

import testimonialImage_ from "../assets/testimonial_frame.png";
import Button from "../components/Button/Button";

function Testimonial({ data }) {
  return (
    <section className="mb-12 inline-flex  h-[510px] w-screen flex-row items-center justify-center gap-x-4 px-36 pb-8 pt-8 font-poppins">
      <div className="flex h-full w-1/2 justify-center">
        <img
          src={data.imageUrl}
          alt="Testimonial"
          className=" absolute z-10 ml-14 mt-8 w-80 rounded-[20px] rounded-br-[90px]"
        />
        <img
          src={testimonialImage_}
          alt="Testimonial frame"
          className="absolute z-0 w-80"
        />
      </div>
      <div className="w-1/2 ">
        <h5 className="font-semibold md:text-xl">{data.name}</h5>
        <Star value={3.5} width={35} height={35} spacing={4} />
        <p className="md:text-3xl">{data.content}</p>
        <p className="font-light text-gray-400 md:text-lg">
          {data.familyName}, {data.familyOccupation}
        </p>
        {/* <Button type="link" href={`/`}>
          <p>Read Their Story</p>
        </Button> */}
      </div>
    </section>
  );
}

export default Testimonial;
