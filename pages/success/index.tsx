import { useEffect } from "react";
import { useEcommerce } from "../../context/EcommerceContext";
import { fireWorksConfetti } from "../../lib/confetti";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useEcommerce();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    fireWorksConfetti();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="my-10 px-5 md:my-20">
      <div className="mx-auto max-w-5xl space-y-3 rounded-lg bg-rose-300/60 py-7">
        <h2 className="p-5 text-center text-3xl font-bold capitalize text-rose-700">
          Thank you for the order.
        </h2>
        <div className="flex items-center justify-center">
          <BadgeCheckIcon className="h-20 w-20 animate-pulse text-emerald-400/80" />
        </div>
        <div className="flex items-center justify-center">
          <Link href="/products">
            <button className="transform rounded-xl bg-rose-500/90 py-2 px-4 text-2xl font-medium text-gray-200 transition-all duration-300 hover:bg-rose-700 active:scale-90">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Success;
