/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";
import { Product } from "../../typing";

type Props = { product: Product; index: number };

const CarouselCard = ({ product, index }: Props) => {
  const { name, details, image, slug } = product;
  const { largeText2, largeText1, buttonText } = product.banner[0];
  const colorBtn = (index: number) => {
    switch (index) {
      case 0:
        return `hover:shadow-cyan-800 bg-cyan-700`;
      case 1:
        return `border-amber-900/80 bg-amber-500/70 shadow-amber-800`;
      case 2:
        return `border-rose-900/80 bg-rose-500/70 shadow-rose-800`;
    }
  };
  const colorText = (index: number) => {
    switch (index) {
      case 0:
        return `text-cyan-300`;
      case 1:
        return `text-amber-200`;
      case 2:
        return `text-rose-300`;
    }
  };
  return (
    <div className="select-none">
      <p className="text-xl">{largeText2}</p>
      <h3 className="mt-1 text-5xl">{name}</h3>
      <h1
        className={`mt-1 -ml-5 hidden font-bold uppercase  md:block md:text-[5em] xl:text-[10em] ${colorText(
          index
        )}`}
      >
        {largeText1}
      </h1>
      <img
        src={`${urlFor(image[0].asset._ref)}`}
        alt="Headphones"
        className="absolute top-[10%] right-0 aspect-square h-[70%] w-[70%] transform cursor-pointer transition-transform duration-500 group-hover:-translate-y-2 md:top-0 md:right-[20%] md:h-[450px] md:w-[450px]"
      />
      <div>
        <Link href={`/products/${slug.current}`}>
          <button
            className={`!z-[1000] mt-10 cursor-pointer rounded-2xl border-none  px-4 py-2 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg active:scale-90 ${colorBtn(
              index
            )}`}
          >
            {buttonText}
          </button>
        </Link>
        <div className="absolute right-[10%] bottom-[5%] flex w-[300px] flex-col leading-snug">
          <h5 className="mb-3 self-end font-bold">Description</h5>
          <p className="cla text-right font-thin line-clamp-2">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
