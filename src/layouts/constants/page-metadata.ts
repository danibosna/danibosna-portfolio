import navigation from "@/components/NavMenu/constants/nav-items";
import type { NavItem } from "@/components/NavMenu/model/nav-item";

export type PageMetadata = Pick<NavItem, "withButton"> & {
  title: string;
  description: string;
  sectionTitle: string;
};

function findMetadataForPath(
  path: string,
  items: NavItem[],
): PageMetadata | undefined {
  const pathParts = path.split("/");

  for (const item of items) {
    const itemParts = item.href.split("/");

    if (path === item.href) {
      return {
        title: `${item.name} - DaniBosna`,
        description: item.description,
        sectionTitle: item.sectionTitle,
        withButton: item.withButton,
      };
    }

    const section = itemParts.find((part, index) => {
      if (pathParts.length === 5) {
        return index === 2 && part === pathParts[index];
      } else if (pathParts.length === 4) {
        return index === 1 && part === pathParts[index];
      }
      return false;
    });

    if (
      section &&
      itemParts.some((part, index) => index > 0 && part.startsWith(":"))
    ) {
      return {
        title: `${item.name} - DaniBosna`,
        description: item.description,
        sectionTitle: item.sectionTitle,
        withButton: item.withButton,
      };
    }

    if (item.subItems) {
      const metadata = findMetadataForPath(path, item.subItems);
      if (metadata) return metadata;
    }
  }
}

export default function getPageMetadata(path: string): PageMetadata {
  const metadata = findMetadataForPath(path, navigation);

  return (
    metadata || {
      title: "DaniBosna",
      description: "Blockchain Developer",
      sectionTitle: "",
      withButton: {
        showButton: false,
        buttonTitle: "",
        variant: undefined,
        size: undefined,
        clickFnIdentifier: null,
      },
    }
  );
}
