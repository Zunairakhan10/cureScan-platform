import React from 'react';

const LoadingAnimation = ({ message = 'Loading results...' }) => {
  return (
    <div className="rounded-[1.25rem] border border-slate-200/70 bg-white/70 px-6 py-8 text-center shadow-sm backdrop-blur">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-600">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-sky-600 border-slate-200" />
      </div>
      <p className="mt-3 text-sm text-slate-600">{message}</p>
    </div>
  );
};

export default LoadingAnimation;
