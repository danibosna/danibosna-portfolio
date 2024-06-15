// src/components/NavComponent.tsx
import React from "react";
import navigations from "../constants/nav-items";
import logoIcon from "@/assets/images/danibosna-logo-white.webp";
import { NavItemAccordion } from "./NavItemAccordion";
import { NavItem } from "./NavItem";
import { useMenuStore } from "../application/useMenuStore";
import { cn } from "@/utils/utils";

const NavComponent: React.FC = () => {
  const { toggleShowMenu, showMenu } = useMenuStore();
  return (
    <nav
      id="nav"
      className={cn(
        "lg:[grid-area:aside] flex justify-center overflow-y-auto overflow-x-hidden clip-container",
        showMenu && "contracted",
      )}
    >
      <div className="w-full h-full flex flex-col justify-start items-centeri space-y-5">
        <div className="flex flex-col justify-start text-xs font-bold p-4 md:text-lg">
          <button
            id="toggle-button"
            className="text-center"
            onClick={() => toggleShowMenu()}
          >
            <img src={logoIcon.src} className="w-10" alt="Logo" />
          </button>
        </div>
        <div className="nav-item w-full flex flex-col py-2 pl-2">
          {navigations?.map((item, index) =>
            item.subItems &&
            item.subItems.some((i) => i.showOnMenu === true) ? (
              <NavItemAccordion key={index} item={item} />
            ) : (
              <NavItem key={index} item={item} />
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
