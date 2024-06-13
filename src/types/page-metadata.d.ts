import type { ButtonSizes, ButtonVariants } from "@/components/ui/button";

export interface PageMetadata {
  showOnMenu: boolean;
  name: string;
  href: string;
  icon: string;
  description: string;
  sectionTitle: string;
  withButton: {
    showButton: boolean;
    buttonTitle: string;
    variant: ButtonVariants;
    size: ButtonSizes;
    clickFnIdentifier: string | null | undefined;
  };
  subItems?: PageMetadata[];
}
