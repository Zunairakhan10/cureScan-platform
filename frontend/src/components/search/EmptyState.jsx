import React from 'react';
import { SearchX } from 'lucide-react';

const EmptyState = ({ message = 'No medicines found', action }) => {
  return (
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/80 px-6 py-10 text-center shadow-[0_18px_45px_-24px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
        <SearchX className="h-6 w-6" />
      </div>
      <h2 className="mt-5 text-xl font-semibold text-slate-900">No Results</h2>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">{message}</p>
      {action && (
        <div className="mt-6">
          <button onClick={action} className="inline-flex items-center gap-2 rounded-[1rem] bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">Try another search</button>
        </div>
      )}
    </div>
  );
};

export default EmptyState;
