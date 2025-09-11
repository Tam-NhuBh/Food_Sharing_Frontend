import React from "react";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

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
        <Button
          onClick={handleSearch}
          variant="primary"
          className="absolute right-0 cursor-pointer rounded-lg py-3 w-[120px]"
        >
          Search
        </Button>
      </div>
    </section>
  );
};

export default SearchBar;
