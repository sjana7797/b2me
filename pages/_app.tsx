import "../styles/globals.css";
import "swiper/css";
import type { AppContext, AppProps } from "next/app";
import RootLayout from "../components/layouts/RootLayout";
import { EcommerceProvider } from "../context/EcommerceContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EcommerceProvider>
      <RootLayout>
        <>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Component {...pageProps} />
        </>
      </RootLayout>
    </EcommerceProvider>
  );
}

export default MyApp;
