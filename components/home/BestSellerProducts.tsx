import Link from "next/link";
import { Product } from "../../typing";
import ProductCard from "./ProductCard";

type Props = { products: Product[] };

const BestSellerProducts = ({ products }: Props) => {
  return (
    <section className="mx-auto max-w-7xl p-10">
      <h2 className="text-center text-3xl font-semibold tracking-wider text-rose-400 md:text-5xl">
        Best Selling Products
      </h2>
      <div className="container my-5 mt-24 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      <Link href={"/products"}>
        <button className="mx-auto mt-10 mb-5 block rounded-2xl bg-rose-500 py-3 px-6 text-2xl font-semibold uppercase text-black transition-all duration-300 hover:bg-rose-600 active:scale-90">
          view all
        </button>
      </Link>
    </section>
  );
};

export default BestSellerProducts;
