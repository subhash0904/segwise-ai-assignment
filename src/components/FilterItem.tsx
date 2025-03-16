import React from "react";

interface FilterItemProps {
  index: number;
  filter: { category: string; value: string };
  categories: string[];
  options: string[];
  updateFilter: (index: number, category: string, value: string) => void;
  removeFilter: (index: number) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ index, filter, categories, options, updateFilter, removeFilter }) => {
  return (
    <div className="flex flex-col gap-2 mb-3 p-4 border border-gray-300 rounded-lg shadow-sm">
      <label className="text-gray-700 font-medium text-sm">Category</label>
      <select 
        className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        value={filter.category} 
        onChange={(e) => updateFilter(index, e.target.value, "")}
      >
        <option value="">Select Category</option>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>

      <label className="text-gray-700 font-medium text-sm mt-2">Value</label>
      <select 
        className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        value={filter.value} 
        onChange={(e) => updateFilter(index, filter.category, e.target.value)}
      >
        <option value="">Select Value</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <button 
        onClick={() => removeFilter(index)} 
        className="text-red-500 hover:text-red-700 transition text-sm self-end mt-2"
      >
        Remove
      </button>
    </div>
  );
};

export default FilterItem;
