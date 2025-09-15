import React from "react";
import { useState } from "react";
import Input from "../Input";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <section className="px-6 md:px-20 xl:px-32 bg-cream">
      <div className="flex flex-row relative py-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="w-full bg-white border-0 py-3 pr-[130px]"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 rounded-lg py-3 w-[50px]"
        >
          <Search className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
