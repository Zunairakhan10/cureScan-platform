import React, { useEffect, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";

const SearchBar = ({ onSearch, initialValue = "" }) => {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="group relative">
      <div className="flex flex-col gap-3 rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-3 shadow-[0_20px_45px_-18px_rgba(15,23,42,0.45)] backdrop-blur sm:flex-row sm:items-center sm:gap-3">
        <label className="flex flex-1 items-center gap-3 rounded-[1.1rem] border border-slate-200/80 bg-slate-50/80 px-4 py-3 transition focus-within:border-sky-400 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.14)]">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search medicines, brands, or symptoms..."
            className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:text-base"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                onSearch("");
              }}
              aria-label="Clear search"
              className="-mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-[1.1rem] bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition duration-200 hover:scale-[1.01] hover:shadow-xl"
        >
          Search
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
