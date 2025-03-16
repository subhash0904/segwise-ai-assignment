import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import FilterItem from "./FilterItem";
import data from "../data.json";

interface FiltersProps {
  filters: { category: string; value: string }[];
  addFilter: () => void;
  updateFilter: (index: number, category: string, value: string) => void;
  removeFilter: (index: number) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, addFilter, updateFilter, removeFilter }) => {
  const categories = ["Country", "Ad Network", "OS", "Tags"];

  const getFilterOptions = (category: string): string[] => {
    if (category === "Country") return [...new Set(data.map(item => item.country))];
    if (category === "Ad Network") return [...new Set(data.map(item => item.ad_network))];
    if (category === "OS") return [...new Set(data.map(item => item.os))];
    if (category === "Tags") return [...new Set(data.flatMap(item => Object.values(item.tags)))];
    return [];
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-full max-w-md mx-auto">
      <button 
        onClick={addFilter} 
        className="flex items-center justify-center bg-green-100 hover:bg-green-200 transition p-3 rounded-lg w-full mb-4 text-green-800 font-medium shadow-sm"
      >
        <IoIosAddCircleOutline className="mr-2 text-lg" /> Add Filter
      </button>

      {filters.map((filter, index) => (
        <FilterItem
          key={index}
          index={index}
          filter={filter}
          categories={categories}
          options={getFilterOptions(filter.category)}
          updateFilter={updateFilter}
          removeFilter={removeFilter}
        />
      ))}
    </div>
  );
};

export default Filters;
