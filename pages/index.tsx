import { GetStaticProps } from "next";
import BestSellerProducts from "../components/home/BestSellerProducts";
import Carousel from "../components/home/Carousel";
import LimitedEdition from "../components/home/LimitedEdition";
import { client } from "../lib/client";
import { Product } from "../typing";

type Props = {
  products: Product[];
  carousel: Product[];
  limitedEdition: Product;
};
const Home = ({ products, carousel, limitedEdition }: Props) => {
  return (
    <>
      <Carousel carousel={carousel} />
      <BestSellerProducts products={products} />
      <LimitedEdition banner={limitedEdition} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productsQuery = `*[_type=='product']{
  ...,
  "banner":*[_type=='banner' && references(^._id)]
}`;
  const products: Product[] = await client.fetch(productsQuery);
  const carousel = products.filter((product) => product.banner.length > 0);
  const limitedEdition = products.find(
    (product) => product._id === "d39c1a3a-a619-430f-ab58-dc74d5c6e11c"
  );
  return { props: { products, carousel, limitedEdition } };
};

export default Home;
