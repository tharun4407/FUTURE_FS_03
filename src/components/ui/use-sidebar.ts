import { useContext } from "react";
import { SidebarContext } from "./sidebar-context";

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);

  if (ctx === null) {
    throw new Error("useSidebar must be used inside SidebarProvider");
  }

  return ctx;
};