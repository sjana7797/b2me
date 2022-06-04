import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactElement,
  Dispatch,
  SetStateAction,
} from "react";
import { CartItem, Operation, Product } from "../typing";
import { toast } from "react-toastify";

type Context = {
  showCart: boolean;
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantities: number;
  totalQuantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  onAdd: (product: Product, quantity: number) => void;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  toggleProductQuanty: (id: string, operator: Operation) => void;
  onRemove: (id: string) => void;
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  setTotalQuantities: Dispatch<SetStateAction<number>>;
};

const context: Context = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  totalQuantity: 0,
  increaseQuantity: () => {
    null;
  },
  decreaseQuantity: () => {
    null;
  },
  onAdd: (product: Product, quantity: number) => {
    null;
  },
  setShowCart: () => {
    null;
  },
  toggleProductQuanty: (id: string, operator: Operation) => {
    null;
  },
  onRemove: (id: string) => {
    null;
  },
  setCartItems: () => {
    null;
  },
  setTotalPrice: () => {
    null;
  },
  setTotalQuantities: () => {
    null;
  },
};

const Ecommerce = createContext(context);

const EcommerceProvider = ({ children }: { children: ReactElement }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(1);

  // State Change functions
  const increaseQuantity = () => {
    setTotalQuantity((prevQty) => prevQty + 1);
  };
  const decreaseQuantity = () => {
    setTotalQuantity((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  /**
   * Add to Cart function
   */
  const onAdd = (product: Product, quantity: number) => {
    const productCartIndex = cartItems.findIndex(
      (item) => item._id === product._id
    );
    setTotalPrice((prevPrice) => prevPrice + quantity * product.price);
    setTotalQuantities((prevQuantities) => prevQuantities + quantity);
    if (productCartIndex >= 0) {
      const updatedCart = cartItems.map((item) => {
        return item._id === product._id
          ? { ...item, quantity: item.quantity + quantity }
          : { ...item };
      });
      setCartItems(updatedCart);
    } else {
      const item = { ...product, quantity: quantity };
      setCartItems([...cartItems, item]);
    }
    toast(`${quantity} ${product.name} added to cart`, {
      theme: "dark",
      type: "success",
    });
  };

  const toggleProductQuanty = (id: string, operator: Operation) => {
    const foundProduct = cartItems.find((item) => item._id === id)!;
    const index = cartItems.findIndex((item) => item._id === id);
    const newCartItems = cartItems;

    if (operator === Operation.increment) {
      newCartItems[index] = {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      };
      setCartItems([...newCartItems]);
      setTotalQuantities((prevQty) => prevQty + 1);
      setTotalPrice((prevPrice) => prevPrice + foundProduct.price);
    } else if (operator === Operation.decrement) {
      if (foundProduct.quantity > 1) {
        newCartItems[index] = {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        };
        setCartItems([...newCartItems]);
        setTotalQuantities((prevQty) => prevQty - 1);
        setTotalPrice((prevPrice) => prevPrice - foundProduct.price);
      } else {
        onRemove(id);
      }
    }
  };

  //onRemoveProduct
  const onRemove = (id: string) => {
    const foundProduct = cartItems.find((item) => item._id === id)!;
    const newCartItems = cartItems.filter((item) => item._id !== id);
    setCartItems([...newCartItems]);
    setTotalQuantities((prevQty) => prevQty - foundProduct.quantity);
    setTotalPrice(
      (prevPrice) => prevPrice - foundProduct.price * foundProduct.quantity
    );
  };

  //change on cart Open and close
  useEffect(() => {
    const body = document.querySelector("body")! as HTMLBodyElement;
    if (showCart) {
      body.classList.add("h-screen", "w-screen", "overflow-hidden");
    } else {
      body.classList.remove("h-screen", "w-screen", "overflow-hidden");
    }
  }, [showCart]);
  return (
    <Ecommerce.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        totalQuantity,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
        setShowCart,
        toggleProductQuanty,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Ecommerce.Provider>
  );
};

const useEcommerce = () => useContext(Ecommerce);

export { EcommerceProvider, useEcommerce };
