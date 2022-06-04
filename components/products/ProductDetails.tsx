/* eslint-disable @next/next/no-img-element */
import { urlFor } from "../../lib/client";
import { Product } from "../../typing";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useEcommerce } from "../../context/EcommerceContext";
import getStripe from "../../lib/getStripe";
import { custAxios } from "../../lib/custAxios";
import { toast } from "react-toastify";

type Props = { product: Product };

const ProductDetails = ({ product }: Props) => {
  const { image, name, details, price } = product;
  const [imageIndex, setImageIndex] = useState(0);
  const { decreaseQuantity, increaseQuantity, totalQuantity, onAdd } =
    useEcommerce();
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await custAxios.post("stripe", {
      data: { cartItems: [{ ...product, quantity: 1 }] },
    });
    if (response.status === 500) return;
    const data = response.data;
    toast.loading("Redirecting...");
    stripe?.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <section className="my-10 mx-auto flex max-w-[1500px] flex-col space-y-10 px-10 md:flex-row md:items-center md:justify-between md:gap-10 md:space-y-0">
      <div className="flex w-full flex-col space-y-5 lg:w-[60%]">
        <div className="cursor-pointer rounded-2xl border border-solid border-gray-900 bg-rose-200/50 shadow-lg shadow-gray-900 transition-colors duration-500 ease-out hover:bg-rose-300/70">
          <img
            src={`${urlFor(image && image[imageIndex].asset._ref)}`}
            alt={name}
            className="h-auto w-full animate-bounce-low-slow object-contain"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {image.map((img, index) => (
            <img
              src={`${urlFor(img.asset._ref)}`}
              alt={name}
              key={index}
              onClick={() => setImageIndex(index)}
              onMouseEnter={() => setImageIndex(index)}
              className={`h-[70px] w-[70px] cursor-pointer rounded-md object-contain  ${
                index === imageIndex
                  ? "bg-rose-300/70"
                  : "bg-rose-200/50 hover:bg-rose-300/70"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col space-y-5 md:space-y-10">
        <h2 className="text-3xl font-medium tracking-wide text-rose-400 md:text-5xl">
          {name}
        </h2>
        <div className="space-y-2 text-base text-gray-300">
          <h3 className="text-2xl font-semibold text-rose-400/80">Details</h3>
          <p>{details}</p>
        </div>
        <div className="text-3xl font-bold text-rose-400">
          &#8377; {price.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")}
        </div>
        <div className="flex items-center space-x-5">
          <p className="whitespace-nowrap text-xl">Quantity :</p>
          <div className="flex overflow-hidden rounded-lg border-2 border-rose-300 text-xl">
            <button
              className="border-none px-4 py-2 outline-none transition-colors duration-200 active:border-none active:bg-rose-300 active:text-gray-900 active:outline-none"
              onClick={decreaseQuantity}
            >
              <MinusIcon className="w-4" />
            </button>
            <div className="px-4 py-2">{totalQuantity}</div>
            <button
              className="border-none px-4 py-2 outline-none transition-colors duration-200 active:border-none active:bg-rose-300 active:text-gray-900 active:outline-none"
              onClick={increaseQuantity}
            >
              <PlusIcon className="w-4" />
            </button>
          </div>
        </div>
        <div className="flex space-x-5 text-2xl">
          <button
            className="rounded-lg border-2 border-rose-300 px-4 py-2 font-medium uppercase text-rose-300 transition-all duration-300 ease-in-out hover:border-rose-400 hover:bg-rose-400 hover:text-gray-900 active:scale-90"
            onClick={() => onAdd(product, totalQuantity)}
          >
            add to cart
          </button>
          <button
            className="rounded-lg border-2 border-rose-300 bg-rose-300 px-4 py-2 font-medium uppercase text-gray-900 transition-all duration-300 ease-in-out hover:border-rose-400 hover:bg-rose-400 active:scale-90"
            onClick={handleCheckout}
          >
            buy now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
