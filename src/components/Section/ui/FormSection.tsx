import { useAlertsStore } from "@/components/Alerts/application/useAlertsStore";
import {
  Button,
  type ButtonSizes,
  type ButtonTypes,
  type ButtonVariants,
} from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/utils/utils";
import React, { type FormEvent, type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className: string;
}

interface FormSectionProps {
  title?: string;
  titleClassName?: string;
  children: ReactNode;
  className: string;
  onlyView?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onDiscardClick?: () => void;
  buttonsAttrb?: {
    btnTitle: string;
    btnType: ButtonTypes;
    btnVariant: ButtonVariants;
    btnSize: ButtonSizes;
    btnClick: () => void;
  }[];
  btnContainerClassName: string;
  formContainerClassName?: string;
}

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className="h-full">
      <div
        className={cn(
          "grid-container py-3 px-12 h-full justify-between",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
};

const FormSection = ({
  title,
  titleClassName,
  children,
  className,
  onlyView,
  onSubmit,
  onDiscardClick,
  buttonsAttrb,
  btnContainerClassName,
  formContainerClassName,
}: FormSectionProps) => {
  const { clearAllErrors } = useAlertsStore();

  return (
    <div className={cn("mx-auto", formContainerClassName)}>
      {title && (
        <h2
          className={cn(
            "w-full text-2xl font-semibold text-tertiary mb-6",
            titleClassName,
          )}
        >
          {title}
        </h2>
      )}
      <form className="w-full pb-5" onSubmit={onSubmit}>
        <div className={cn(`grid py-3 gap-8 justify-items-center`, className)}>
          {children}
        </div>
        {!onlyView && (
          <div className={cn("flex gap-2 w-full", btnContainerClassName)}>
            {!buttonsAttrb ? (
              <>
                <Button type="submit" size={"lg"}>
                  Guardar
                </Button>
                <Button
                  type="reset"
                  onClick={() => {
                    clearAllErrors();
                    if (onDiscardClick) {
                      onDiscardClick();
                    }
                  }}
                  size={"lg"}
                >
                  Descartar
                </Button>
              </>
            ) : (
              buttonsAttrb.map((btn) => (
                <Button
                  type={btn.btnType}
                  onClick={btn.btnClick}
                  size={btn.btnSize}
                  variant={btn.btnVariant}
                >
                  {btn.btnTitle}
                </Button>
              ))
            )}
          </div>
        )}
      </form>
    </div>
  );
};

const SectionScroll = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <ScrollArea className={className}>{children}</ScrollArea>;
};

Section.Form = FormSection;
Section.Scroll = SectionScroll;
