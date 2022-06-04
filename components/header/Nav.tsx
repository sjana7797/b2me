import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEcommerce } from "../../context/EcommerceContext";

const Nav = () => {
  const { setShowCart, totalQuantities } = useEcommerce();
  return (
    <nav className="max-w-3xl">
      <ul className="hidden items-center space-x-2 md:flex">
        <li>
          <Link href="/account/login">
            <a className="rounded-lg bg-rose-400 px-4 py-2 text-lg font-medium text-gray-800 transition-colors duration-300 hover:bg-rose-500">
              Login
            </a>
          </Link>
        </li>
        <li>
          <Link href="/account/login">
            <a className="rounded-lg bg-rose-400 px-4 py-2 text-lg font-medium text-gray-800 transition-colors duration-300 hover:bg-rose-500">
              Sign Up
            </a>
          </Link>
        </li>
        <li>
          <Link href="/account/login">
            <a className="rounded-lg bg-rose-400 px-4 py-2 text-lg font-medium text-gray-800 transition-colors duration-300 hover:bg-rose-500">
              Logout
            </a>
          </Link>
        </li>
        <li>
          <button
            className="relative flex items-center justify-center p-0.5"
            onClick={() => {
              setShowCart((prevShowCart) => !prevShowCart);
            }}
          >
            <ShoppingBagIcon className="h-10 w-10" />
            <div className="absolute top-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-rose-400 text-sm font-medium text-gray-900">
              {totalQuantities}
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
