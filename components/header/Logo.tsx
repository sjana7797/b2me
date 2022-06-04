import Link from "next/link";
import { APP_NAME } from "../../config/app";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <h1 className="cursor-pointer text-3xl font-bold italic tracking-wide transition-colors duration-300 hover:text-rose-400">
        {APP_NAME}
      </h1>
    </Link>
  );
};

export default Logo;
