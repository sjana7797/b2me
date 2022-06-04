/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { urlFor } from "../../lib/client";
import { Product } from "../../typing";

type Props = { banner: Product };

function LimitedEditionBanner({ banner }: Props) {
  const { name, details, image, slug } = banner;
  return (
    <div className="group relative mx-auto my-5 h-[576px] max-w-7xl rounded-2xl border-2 border-solid border-purple-900/80 bg-purple-400/60  py-24 px-10 leading-[0.9] shadow shadow-purple-800 backdrop-blur-sm md:h-[500px]">
      <div className="select-none">
        <p className="text-xl">boAt</p>
        <h3 className="mt-1 text-5xl">{name}</h3>
        <h1 className="mt-1 -ml-5 hidden font-bold uppercase text-fuchsia-300 md:block md:text-[5em] xl:text-[10em]">
          Earphones
        </h1>
        <img
          src={`${urlFor(image[0].asset._ref)}`}
          alt="Earphones"
          className="absolute top-[10%] right-0 aspect-square h-[70%] w-[70%]  animate-bounce-low-slow cursor-pointer md:top-0 md:right-[20%] md:h-[450px] md:w-[450px]"
        />
        <div>
          <Link href={`/products/${slug.current}`}>
            <button className="!z-[1000] mt-10 cursor-pointer rounded-2xl border-none bg-pink-500 px-4 py-2 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-800 active:scale-90">
              Buy Now
            </button>
          </Link>
          <div className="absolute right-[10%] bottom-[5%] flex w-[300px] flex-col leading-snug">
            <h5 className="mb-3 self-end font-bold">Description</h5>
            <p className="cla text-right font-thin line-clamp-2">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimitedEditionBanner;
