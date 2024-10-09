import { useLocation } from "react-router-dom";

import AppBar from "./AppBar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="max-w-[480px] mx-auto bg-gradient-to-br md:shadow-md min-h-screen dark:border-[1px] dark:border-white">
      <main>{children}</main>
      {pathname === "/" ||
      pathname === "/leaderboards" ||
      pathname === "/profile" ? (
        <AppBar />
      ) : null}
    </div>
  );
};

export default Wrapper;
