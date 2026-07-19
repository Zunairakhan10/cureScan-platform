import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";
import medicines from "../data/medicines";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [query, setQuery] = useState(searchParams.get("medicine") ?? "");

  const handleSearch = (value) => {
    const normalizedQuery = value.trim().toLowerCase();
    setQuery(value);

    if (!normalizedQuery) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const filteredMedicines = medicines.filter((medicine) => {
      const searchableText = [
        medicine.name,
        medicine.type,
        medicine.manufacturer,
        medicine.description,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });

    setResults(filteredMedicines);
    setHasSearched(true);
  };

  useEffect(() => {
    const initialValue = searchParams.get("medicine") ?? "";
    setQuery(initialValue);
    handleSearch(initialValue);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-transparent px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 px-6 py-8 shadow-[0_25px_60px_-20px_rgba(14,116,144,0.32)] backdrop-blur-xl sm:px-8 lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_35%)]" />
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-sm font-medium text-emerald-700">
              <Sparkles className="h-4 w-4" />
              AI-led medicine discovery
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Search Medicines
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Search medicines, compare prices, and discover affordable generic alternatives.
            </p>
            <div className="mt-6 w-full max-w-3xl">
              <SearchBar initialValue={query} onSearch={handleSearch} />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Verified availability
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
                <Stethoscope className="h-4 w-4 text-sky-500" />
                Smart alternatives
              </span>
            </div>
          </div>
        </section>

        <SearchResults results={results} hasSearched={hasSearched} query={query} />
      </div>
    </div>
  );
};

export default Search;