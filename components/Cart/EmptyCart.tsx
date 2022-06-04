import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEcommerce } from "../../context/EcommerceContext";

const EmptyCart = () => {
  const { setShowCart } = useEcommerce();
  return (
    <div className="flex h-full w-full flex-col items-center">
      <ShoppingBagIcon className="h-auto w-full select-none stroke-1 text-rose-300/80" />
      <div className="flex flex-col space-y-4 text-2xl text-gray-200/60">
        <h4>Your Cart is Empty</h4>
        <Link href="/products">
          <button
            className="rounded-lg bg-rose-300/80 py-2 font-medium text-gray-900 transition-colors duration-300 hover:bg-rose-400"
            onClick={() => {
              setShowCart(false);
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
