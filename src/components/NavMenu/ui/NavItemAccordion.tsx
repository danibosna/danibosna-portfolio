import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { NavItem } from "../model/nav-item";

interface AccordionProps {
  item: NavItem;
}

export const NavItemAccordion: React.FC<AccordionProps> = ({ item }) => {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  const currentRoute = new URLSearchParams("").toString();
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="nav-item">
            <span className="flex items-center gap-4">
              <img
                className="p-1 nav-item-icon"
                src={item?.icon}
                alt={item?.name}
                width={22}
              />
              <span className={`w-full text-sm nav-item-text`}>
                {item?.name}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {item?.subItems &&
              item?.subItems
                .filter((link) => link.showOnMenu)
                .map((link) => (
                  <div
                    key={link.href}
                    className={classNames(
                      !currentRoute.includes(item?.href.split("/")[2]!)
                        ? "mb-2"
                        : "opacity-5",
                      `mb-2 pl-2 py-1 flex flex-col justify-center text-xs md:text-lg textwalle hover:glass w-full rounded-l-3xl`,
                    )}
                  >
                    <a href={link.href}>
                      <span className="flex items-center gap-4">
                        <img
                          className="p-1 nav-item-icon"
                          src={link.icon}
                          alt={link.name}
                          width={22}
                        />
                        <span className={`w-full text-sm nav-item-text`}>
                          {link.name}
                        </span>
                      </span>
                    </a>
                  </div>
                ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
