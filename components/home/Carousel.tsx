import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Product } from "../../typing";
import CarouselCard from "./CarouselCard";
type Props = { carousel: Product[] };

function Carousel({ carousel }: Props) {
  SwiperCore.use([Autoplay]);
  const color = (index: number) => {
    switch (index) {
      case 0:
        return `border-cyan-900/80 bg-cyan-400/70 shadow-cyan-800`;
      case 1:
        return `border-amber-300/80 bg-amber-300/70 shadow-amber-800`;
      case 2:
        return `border-rose-900/80 bg-rose-400/70 shadow-rose-800`;
    }
  };
  return (
    <section className="mb-10 mt-10 w-full md:mb-20">
      <Swiper
        slidesPerView={1}
        grabCursor
        spaceBetween={50}
        autoplay={{ delay: 3000 }}
        className="!px-5"
      >
        {carousel.map((product, index) => (
          <SwiperSlide
            key={product._id}
            className={`group relative h-[576px] rounded-2xl border-2 border-solid   py-24 px-10 leading-[0.9] shadow backdrop-blur-sm md:h-[500px] ${color(
              index
            )}`}
          >
            <CarouselCard product={product} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carousel;
