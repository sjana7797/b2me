import { LinkIcon } from "@heroicons/react/outline";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import ProductDetails from "../../components/products/ProductDetails";
import Recommendations from "../../components/products/Recommendations";
import { client } from "../../lib/client";
import { custAxios } from "../../lib/custAxios";
import getStripe from "../../lib/getStripe";
import { Product } from "../../typing";

type Props = { product: Product; products: Product[] };

const Product = ({ product, products }: Props) => {
  return (
    <>
      <div className="my-5 mx-auto ml-2 flex max-w-md items-center space-x-2 text-sm capitalize lg:text-base">
        <Link href="/">
          <a className="transition-colors duration-300 hover:text-rose-300">
            home
          </a>
        </Link>
        <LinkIcon className="w-4 select-none" />
        <Link href="/products">
          <a className="transition-colors duration-300 hover:text-rose-300">
            All Products
          </a>
        </Link>
        <LinkIcon className="w-4 select-none" />
        <div className="select-none text-rose-300">{product.name}</div>
      </div>
      <ProductDetails product={product} />
      <Recommendations products={products} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productsSlugQuery = `*[_type=='product']{
    slug{
      current
    }
  }`;
  const productsSlug: { slug: { current: string } }[] = await client.fetch(
    productsSlugQuery
  );
  const paths = productsSlug.map((slug) => ({
    params: { slug: slug.slug.current },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug || "";
  const productQuery = `*[_type=='product' && slug.current== '${slug}'][0]`;
  const product: Product = await client.fetch(productQuery);
  const productsQuery = `*[_type=='product']`;
  const products: Product[] = await client.fetch(productsQuery);
  return { props: { product, products } };
};

export default Product;
