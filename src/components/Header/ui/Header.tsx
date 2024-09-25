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
    <div className="w-full min-h-10 grid grid-cols-[25%_1fr_25%]">
      <h1 className="w-full text-center col-start-2 text-2xl font-semibold text-slate-400">
        {sectionTitle}
      </h1>
      <div className="w-full col-start-3 text-center">
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
    </div>
  );
};

export default Header;
