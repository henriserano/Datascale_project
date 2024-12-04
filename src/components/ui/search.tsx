import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function Search({ onSearch, placeholder = 'Search sectors...' }: SearchProps) {
  return (
    <div className="relative w-full max-w-xl">
      <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}