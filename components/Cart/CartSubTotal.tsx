import { toast } from "react-toastify";
import { useEcommerce } from "../../context/EcommerceContext";
import { custAxios } from "../../lib/custAxios";
import getStripe from "../../lib/getStripe";

const CartSubTotal = () => {
  const { totalPrice, cartItems } = useEcommerce();
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await custAxios.post("stripe", {
      data: { cartItems },
    });
    if (response.status === 500) return;
    const data = response.data;
    toast.loading("Redirecting...");
    stripe?.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div className="flex h-[10vh] flex-col space-y-2">
      <div className="flex  w-full items-center justify-between">
        <p>Subtotal:</p>
        <p className="font-medium text-rose-400">
          &#8377;{" "}
          {totalPrice.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")}
        </p>
      </div>
      <div className="self-center">
        <button
          className="rounded-lg bg-rose-300 px-4 py-2 text-xl font-medium capitalize text-gray-900 transition-all duration-300 hover:bg-rose-400 active:scale-90"
          onClick={handleCheckout}
        >
          pay now
        </button>
      </div>
    </div>
  );
};

export default CartSubTotal;
