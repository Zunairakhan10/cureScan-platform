import React from 'react';
import MedicineCard from './MedicineCard';

const SearchResults = ({ results, isLoading, hasSearched }) => {
  if (isLoading) {
    return <div className="search-results loading">Loading...</div>;
  }

  if (!hasSearched) {
    return <div className="search-results empty">Start searching for medicines</div>;
  }

  if (results.length === 0) {
    return <div className="search-results empty">No results found</div>;
  }

  return (
    <div className="search-results">
      <div className="results-count">
        Found {results.length} result{results.length !== 1 ? 's' : ''}
      </div>
      <div className="results-grid">
        {results.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
