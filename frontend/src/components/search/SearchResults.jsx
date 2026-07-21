import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pill, SearchX } from "lucide-react";
import MedicineCard from "./MedicineCard";
import EmptyState from "./EmptyState";

const SearchResults = ({ results, hasSearched, query }) => {
  if (!hasSearched) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[1.75rem] border border-dashed border-slate-300/80 bg-white/70 px-6 py-10 text-center shadow-[0_18px_45px_-24px_rgba(15,23,42,0.4)] backdrop-blur-xl"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-emerald-500 text-white shadow-lg">
          <SearchX className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-xl font-semibold text-slate-900">
          Start typing to search medicines.
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
          Discover trusted medicines, compare pricing, and unlock smarter generic alternatives with a few keystrokes.
        </p>
      </motion.div>
    );
  }

  if (results.length === 0) {
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <EmptyState message={'Try a broader term like “pain” or “antibiotic” to find the medicine you need.'} />
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Clinically relevant matches</h2>
          <p className="text-sm text-slate-600">
            Showing {results.length} {results.length === 1 ? "match" : "matches"} for “{query}”
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1.5 text-sm font-medium text-emerald-700">
          <Pill className="h-4 w-4" />
          {results.length} results
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {results.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} query={query} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchResults;
