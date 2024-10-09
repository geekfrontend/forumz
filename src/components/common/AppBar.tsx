import { useLocation, Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlinePencil,
  HiOutlineChartBar,
  HiOutlineUser,
} from "react-icons/hi";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./ThemeToggle";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const iconSize: number = 24;

const DATA = {
  navbar: [
    { href: "/", icon: <HiOutlineHome size={iconSize} />, label: "Home" },
    { href: "/", icon: <HiOutlinePencil size={iconSize} />, label: "Threads" },
    {
      href: "/",
      icon: <HiOutlineChartBar size={iconSize} />,
      label: "Leaderboard",
    },
    {
      href: "/",
      icon: <HiOutlineUser size={iconSize} />,
      label: "Profile",
    },
  ],
};

const AppBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-4 w-full max-w-[480px] mx-auto">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                      `${pathname === item.href ? "text-primary" : ""}`
                    )}
                  >
                    {item.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
};

export default AppBar;
