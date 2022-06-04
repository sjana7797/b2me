import React from "react";
import { Product } from "../../typing";
import LimitedEditionBanner from "./LimitedEditionBanner";

type Props = { banner: Product };

const LimitedEdition = ({ banner }: Props) => {
  return (
    <section className="mx-auto my-10 max-w-7xl md:my-20">
      <h2 className="mb-10 text-center text-3xl font-semibold tracking-wider text-purple-400 md:text-5xl">
        Limited Edition
      </h2>
      <LimitedEditionBanner banner={banner} />
    </section>
  );
};

export default LimitedEdition;
