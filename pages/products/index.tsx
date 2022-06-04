import { GetStaticProps } from "next";
import Link from "next/link";
import ProductCard from "../../components/home/ProductCard";
import { client } from "../../lib/client";
import { Product } from "../../typing";
import { LinkIcon } from "@heroicons/react/outline";

type Props = { products: Product[] };

const Products = ({ products }: Props) => {
  return (
    <>
      <div className="my-5 mx-auto ml-2 flex max-w-md items-center space-x-2 text-sm capitalize lg:text-base">
        <Link href="/">
          <a className="transition-colors duration-300 hover:text-rose-300">
            home
          </a>
        </Link>
        <LinkIcon className="w-4 select-none" />
        <div className="select-none text-rose-300">All Products</div>
      </div>
      <h2 className="mt-10 text-center text-4xl font-bold uppercase tracking-wider text-rose-300 md:text-6xl xl:text-7xl">
        All Products
      </h2>
      <section className="mx-auto my-10 grid max-w-7xl grid-cols-1 gap-5 md:my-20 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productsQuery = `*[_type=='product']`;
  const products: Product[] = await client.fetch(productsQuery);

  return { props: { products } };
};

export default Products;
