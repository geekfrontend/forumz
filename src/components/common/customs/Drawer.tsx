import * as React from "react";
import { DrawerContent } from "@/components/ui/drawer";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  return <DrawerContent>{children}</DrawerContent>;
};

export default Drawer;
