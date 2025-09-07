import React from "react";

export interface RecipeCardProps {
  image?: string;
  title: string;
  description?: string;
  category?: string[];
  actions?: React.ReactNode;
  className?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  category,
  title,
  description,
  actions,
  className = "",
}) => {
  return (
    <div
      className={`bg-white border border-black overflow-hidden flex flex-col ${className} cursor-pointer`}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4 flex-1 flex flex-col">
        {category && (
          <span className="font-playfair font-bold text-sm text-black mb-2">
            {category}
          </span>
        )}
        <h2 className="text-lg font-bold mb-2 font-worksans">{title}</h2>
        {description && (
          <p className="font-worksans font-medium text-black flex-1 mb-4">
            {description}
          </p>
        )}
        {actions && (
          <div className="font-worksans font-bold text-sm mt-auto">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
