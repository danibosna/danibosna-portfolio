import {
  Button,
  type ButtonSizes,
  type ButtonVariants,
} from "@/components/ui/button";
import { navigate } from "astro:transitions/client";
import {
  useDynamicRoutes,
  type ClickFnMappings,
} from "../constants/dynamic-routes";

interface MainHeaderProps {
  sectionTitle: string;
  buttonData: {
    showButton: boolean;
    buttonTitle: string;
    variant: ButtonVariants;
    size: ButtonSizes;
    clickFnIdentifier: keyof ClickFnMappings | null | undefined;
  };
  query?: string;
}

const Header: React.FC<MainHeaderProps> = ({
  sectionTitle,
  buttonData,
  query,
}) => {
  const dynamicRoutes = useDynamicRoutes();

  const handleClick = () => {
    const fn = dynamicRoutes[buttonData.clickFnIdentifier ?? "defaultKey"];
    if (typeof fn === "function") {
      const route = query ? fn(query) : fn();

      if (typeof route === "string") {
        return navigate(route);
      } else if (typeof route === "function") {
        return route;
      }
    } else {
      console.error("Función no definida para", buttonData.clickFnIdentifier);
    }
  };

  return (
    <div className="flex items-center gap-1 justify-end md:gap-6 sm:justify-between px-4">
      <h1 className="w-3/4 sm:w-1/2 sm:text-start text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-400">
        {sectionTitle}
      </h1>
      {buttonData?.showButton && (
        <Button
          type="button"
          variant={buttonData.variant}
          size={buttonData.size}
          onClick={handleClick}
        >
          {buttonData.size !== "icon" ? (
            <span>{buttonData.buttonTitle}</span>
          ) : (
            <img src={buttonData?.buttonTitle} alt="" />
          )}
        </Button>
      )}
    </div>
  );
};

export default Header;
