// src/components/NavItem.tsx
import React from "react";
import { cn } from "@/utils/utils";

interface SubItem {
  href: string;
  name: string;
  icon: string;
}

interface Item {
  href: string;
  name: string;
  icon: string;
  subItems?: SubItem[];
}

interface Props {
  item: Item;
}

export const NavItem: React.FC<Props> = ({ item }) => {
  const currentRoute = window.location.pathname; // Usar window.location.pathname en lugar de URLSearchParams
  const isActive = currentRoute.includes(item.href.split("/")[2] || "");

  return (
    <div
      className={cn(
        // !isActive ? "mb-2" : "opacity-5",
        "mb-2 pl-2 py-1 flex flex-col justify-center text-xs md:text-lg text-white hover:glass hover:clip-container w-full",
      )}
    >
      <a href={item.href}>
        <span className="flex items-center gap-4">
          <img
            className="p-1 nav-item-icon"
            src={item.icon}
            alt={item.name}
            width={25}
          />
          <span className="w-full text-sm nav-item-text font-medium text-primary-foreground">
            {item.name}
          </span>
        </span>
      </a>
    </div>
  );
};
