import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function DefaultLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="flex-[1]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
