/* eslint-disable @next/next/no-img-element */
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { urlFor } from "../../lib/client";
import { Operation, CartItem } from "../../typing";
import { useEcommerce } from "../../context/EcommerceContext";

type Props = {
  item: CartItem;
};

const CartItemCard = ({ item }: Props) => {
  const { image, name, price, _id, quantity } = item;
  const { toggleProductQuanty, onRemove } = useEcommerce();
  return (
    <div className="flex snap-start items-center justify-between space-x-5 rounded-xl border border-rose-200 bg-rose-200/90 py-2 px-4 shadow-lg shadow-gray-900">
      <div className="w-1/5">
        <img
          src={`${urlFor(image[0].asset._ref)}`}
          className="rounded-lg bg-rose-300"
        />
      </div>
      <div className="flex w-4/5 flex-col items-end space-y-2">
        <h2 className="text-lg font-medium text-gray-900">{name}</h2>
        <p className="font-bold text-rose-700">
          &#8377; {price.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")}
        </p>
        <div className="flex w-fit overflow-hidden rounded-lg border-2 border-gray-800 text-gray-900">
          <button
            className="px-4 py-2"
            onClick={() => {
              toggleProductQuanty(_id, Operation.decrement);
            }}
          >
            <MinusIcon className="w-4" />
          </button>
          <div className="px-4 py-2">{quantity}</div>
          <button
            className="px-4 py-2"
            onClick={() => {
              toggleProductQuanty(_id, Operation.increment);
            }}
          >
            <PlusIcon className="w-4" />
          </button>
        </div>
        <button onClick={() => onRemove(item._id)}>
          <TrashIcon className="w-7 text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
