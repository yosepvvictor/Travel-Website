import React from "react";
import Button from "../components/Button/Button";

function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section
        className="px-16 pb-8 pt-8 font-poppins"
        key={`category-${index1}`}
      >
        <h4 className="my-8 text-2xl font-semibold">{category.name}</h4>

        <div className={`grid h-[200px] grid-cols-4 gap-x-4`}>
          {category.items.length === 0 ? (
            <div className="col-span-4 flex h-full w-full items-center justify-center text-center">
              There is no property at this category
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  className="col-span-1 row-span-1 overflow-hidden rounded-xl"
                  key={`category-${index1}-item-${index2}`}
                  // onClick={handleCard}
                >
                  <div className="relative h-full">
                    {item.isPopular && (
                      <div className="absolute right-0 top-0 z-10 w-fit rounded-bl-2xl rounded-tr-lg border-transparent bg-pinkTag px-6 py-1 font-semibold text-white">
                        Popular{" "}
                      </div>
                    )}
                    <figure className="rounded-x -z-10 h-full">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full object-cover transition-transform hover:scale-105"
                      />
                    </figure>
                    <div className="overover absolute bottom-0 z-10 w-full py-4 pl-3 text-sm text-white md:text-base lg:text-lg">
                      <Button href={`/properties/${item._id}`} type="link">
                        <p>{item.name}</p>
                      </Button>
                      <p className="text-xs md:text-sm">
                        {item.city}, {item.country}
                      </p>
                    </div>
                    {/* <div className=" relative bottom-0 z-10 w-full py-4 pl-3 text-sm  md:text-base lg:text-lg">
                      <Button href={`/properties/${item._id}`} type="link">
                        <p className="text-gray-800">{item.name}</p>
                      </Button>
                      <p className="text-xs md:text-sm">
                        {item.city}, {item.country}
                      </p>
                    </div> */}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}

export default Categories;
