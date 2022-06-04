import { useEffect, useRef } from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useEcommerce } from "../../context/EcommerceContext";
import EmptyCart from "../Cart/EmptyCart";
import CartItemsContainer from "../Cart/CartItemsContainer";
import CartSubTotal from "../Cart/CartSubTotal";

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { setShowCart, totalQuantities, showCart } = useEcommerce();
  useEffect(() => {
    if (showCart && cartRef.current) {
      cartRef.current.classList.add("translate-x-full");
      setTimeout(() => {
        if (cartRef.current) cartRef.current.classList.add("translate-x-0");
      }, 500);
    } else {
      if (cartRef.current) {
        cartRef.current.classList.add("translate-x-0");
        setTimeout(() => {
          if (cartRef.current)
            cartRef.current.classList.add("translate-x-full");
        }, 500);
      }
    }
  }, [showCart]);
  return (
    <section className="fixed top-0 right-0 z-50 flex w-screen justify-end bg-rose-700/20 backdrop-blur transition-all duration-1000 ease-in-out">
      <div
        className="h-screen w-[32rem] max-w-lg bg-gray-800 p-5 transition-transform duration-300"
        ref={cartRef}
      >
        <button
          onClick={() => setShowCart(false)}
          className="flex h-[8vh] items-center space-x-2"
        >
          <ChevronLeftIcon className="w-8 text-rose-500" />
          <span>Your Cart</span>
          <span className="text-rose-400">({totalQuantities} items)</span>
        </button>
        {totalQuantities <= 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex h-[92vh] flex-col">
            <CartItemsContainer />
            <CartSubTotal />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
