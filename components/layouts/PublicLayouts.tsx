import Link from "next/link";
import { ReactNode } from "react";
import CookieConsent from "../banners/CookieConsent";

export const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-full max-w-[1070px] px-2 mx-auto md:px-4">{children}</div>
);

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div>{children}</div>

      <CookieConsent />
    </div>
  );
};

export default PublicLayout;
