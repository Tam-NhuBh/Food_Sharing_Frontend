import { useState } from "react";
import { Filter, X } from "lucide-react";
import type { Category } from "../../types";

interface Props {
  categories: Category[];
  selected: string[];
  onChange: (categories: string[]) => void;
}

export default function CategoryMultiSelectFilter({
  categories,
  selected,
  onChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategory = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((c) => c !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  const clearAll = () => onChange([]);

  return (
    <div className="relative flex justify-end">
      {/* Filter Trigger */}
      <div
        className="flex items-center gap-2 cursor-pointer hover:opacity-80"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-medium">Filter by</span>
        <Filter className="w-4 h-4" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 w-64 bg-white rounded-2xl shadow-lg p-4 z-20">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Filter by Category</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
            {categories.map((cat) => {
              const isSelected = selected.includes(String(cat.id));
              return (
                <label key={cat.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleCategory(String(cat.id))}
                    className="accent-primary"
                  />
                  <span className={isSelected ? "font-medium text-primary" : ""}>
                    {cat.name}
                  </span>
                </label>
              );
            })}
          </div>

          {selected.length > 0 && (
            <button
              onClick={clearAll}
              className="mt-3 text-sm text-primary hover:underline"
            >
              Clear all
            </button>
          )}
        </div>
      )}
    </div>
  );
}
