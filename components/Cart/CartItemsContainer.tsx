import { useEcommerce } from "../../context/EcommerceContext";
import CartItemCard from "./CartItemCard";

const CartItemsContainer = () => {
  const { cartItems } = useEcommerce();
  return (
    <div className="my-5 flex h-[70vh] w-full snap-y snap-mandatory flex-col space-y-4 overflow-y-scroll scrollbar-hide">
      {cartItems.map((item, index) => (
        <CartItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CartItemsContainer;
