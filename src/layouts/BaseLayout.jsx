import { AccountModalProvider } from "../components/AccountModal";
import { AdminSessionProvider } from "../components/AdminSession";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { loadCalendarReservations } from "../lib/calendar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import { LightboxProvider } from "../components/Lightbox";

export default function BaseLayout() {
  useEffect(() => {
    if (document.readyState === "complete") loadCalendarReservations();
    else window.addEventListener("load", loadCalendarReservations, { once: true });
    return () => window.removeEventListener("load", loadCalendarReservations);
  }, []);

  return (
    <AdminSessionProvider><AccountModalProvider>
      <MobileNav />
      <HeaderNav />
      <LightboxProvider>
        <Outlet />
      </LightboxProvider>
      <Footer />
    </AccountModalProvider></AdminSessionProvider>
  );
}
