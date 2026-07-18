import React from 'react';

const EmptyState = ({ message = 'No medicines found' }) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">📋</div>
      <h2 className="empty-state-title">No Results</h2>
      <p className="empty-state-message">{message}</p>
      <button className="empty-state-action">Try another search</button>
    </div>
  );
};

export default EmptyState;
