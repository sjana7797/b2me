/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { urlFor } from "../../lib/client";
import { Product } from "../../typing";

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  const { name, image, price, slug } = product;
  return (
    <Link href={`/products/${slug.current}`}>
      <a className="group flex cursor-pointer flex-col space-y-5 rounded-xl border-2 border-transparent bg-rose-300/20 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-rose-700 hover:bg-rose-300/60 hover:shadow-md hover:shadow-rose-900/40">
        <img
          src={`${urlFor(image[0].asset._ref)}`}
          alt={name}
          className="transform transition-transform duration-700 group-hover:-translate-y-2"
        />
        <h3 className="text-center text-2xl text-rose-500 transition-colors duration-300 line-clamp-1 group-hover:text-white">
          {name}
        </h3>
        <h5 className="text-lg font-bold tracking-widest">
          &#8377; {price.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")}
        </h5>
      </a>
    </Link>
  );
};

export default ProductCard;
