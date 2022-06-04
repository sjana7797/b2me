import Cart from "../header/Cart";
import Logo from "../header/Logo";
import Nav from "../header/Nav";
import { useEcommerce } from "../../context/EcommerceContext";

const Header = () => {
  const { showCart } = useEcommerce();
  return (
    <header className="flex w-full flex-col justify-between px-10 py-5 md:flex-row">
      <Logo />
      <Nav />
      {showCart && <Cart />}
    </header>
  );
};

export default Header;
