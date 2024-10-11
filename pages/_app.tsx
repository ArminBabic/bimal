import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PublicLayout from "../components/layouts/PublicLayouts";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    </main>
  );
}
