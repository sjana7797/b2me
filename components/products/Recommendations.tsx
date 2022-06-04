import { Product } from "../../typing";
import ProductCard from "../home/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

type Props = {
  products: Product[];
};

const Recommendations = ({ products }: Props) => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="mx-auto my-10 max-w-7xl space-y-10 md:my-20">
      <h2 className="text-center text-3xl font-medium capitalize tracking-wide text-rose-400 md:text-4xl lg:text-7xl">
        you may also like
      </h2>
      <Swiper
        slidesPerView={3}
        grabCursor
        spaceBetween={50}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="!py-5"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id} className="select-none">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Recommendations;
