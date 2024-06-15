import React from "react";

interface ArticleCardProps {
  id: string;
  slug: string;
  index: number;
  thumbnail: string;
  title: string;
}

export const ArticleCard = ({
  id,
  slug,
  index,
  title,
  thumbnail,
}: ArticleCardProps) => {
  const getColumnSpan = () => {
    if (index <= 3) return "col-span-12 md:col-span-6";
    if (index <= 12) return "col-span-6 md:col-span-4";
    if (index > 12) return "col-span-12 md:col-span-6";
    return "";
  };

  return (
    <div className={`${getColumnSpan()} cursor-pointer`}>
      <button className="w-full">
        <div className="group relative grid gap-x-12">
          <span className="relative w-full">
            <img
              className="w-full clip-container object-cover object-center"
              src={thumbnail ?? ""}
              alt="noticia destacada"
            />
          </span>
          <span className="absolute bottom-0 flex w-full items-center justify-start clip-container bg-black bg-opacity-70 py-4">
            <h3
              className={`mx-3 my-2 truncate text-start text-lg font-semibold text-white group-hover:w-full group-hover:overflow-visible group-hover:text-clip group-hover:whitespace-normal md:text-xl lg:text-2xl`}
            >
              {title}
            </h3>
          </span>
        </div>
      </button>
    </div>
  );
};
