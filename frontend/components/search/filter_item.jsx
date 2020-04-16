import React from 'react';

const FilterItem = ({ text }) => (
  <div className="checkbox-container">
    <input type="checkbox" />
    <label className="checkbox-title">{text}</label>
  </div>
);

export default FilterItem;