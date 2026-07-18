import React from 'react';

const MedicineCard = ({ medicine }) => {
  return (
    <div className="medicine-card">
      <div className="medicine-card-header">
        <h3 className="medicine-name">{medicine.name}</h3>
      </div>
      <div className="medicine-card-body">
        <p className="medicine-info">
          <strong>Type:</strong> {medicine.type}
        </p>
        <p className="medicine-info">
          <strong>Manufacturer:</strong> {medicine.manufacturer}
        </p>
        <p className="medicine-info">
          <strong>Price:</strong> ${medicine.price}
        </p>
        <p className="medicine-description">{medicine.description}</p>
      </div>
      <div className="medicine-card-footer">
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default MedicineCard;
