import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import Filters from "./components/Filters";
import Table from "./components/Table";
import data from "./data.json";

const App: React.FC = () => {
  const [filters, setFilters] = useState<{ category: string; value: string }[]>([]);
  const [search, setSearch] = useState<string>("");
  const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);

  const addFilter = () => {
    setFilters([...filters, { category: "", value: "" }]);
  };

  const updateFilter = (index: number, category: string, value: string) => {
    const updatedFilters = [...filters];
    updatedFilters[index] = { category, value };
    setFilters(updatedFilters);
  };

  const removeFilter = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  const filteredData = data.filter((item) => {
    return filters.every(filter => {
      if (filter.category === "Country") return item.country === filter.value;
      if (filter.category === "Ad Network") return item.ad_network === filter.value;
      if (filter.category === "OS") return item.os === filter.value;
      if (filter.category === "Tags") return Object.values(item.tags).includes(filter.value);
      return true;
    });
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center text-2xl font-bold mb-6">Segwise Dashboard</header>

      <div className="flex justify-between items-center mb-4 bg-white p-4 rounded shadow-lg">
        <button
          className="bg-gray-200 p-2 rounded flex items-center gap-2"
          onClick={() => setShowFilterDropdown(!showFilterDropdown)}
        >
          <FiFilter /> Filters {filters.length > 0 && (
            <span className="ml-1 text-sm bg-green-500 text-white px-2 py-1 rounded">{filters.length}</span>
          )}
        </button>
        <input
          type="text"
          placeholder="Search creatives..."
          className="border p-2 rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {showFilterDropdown && (
        <Filters 
          filters={filters} 
          addFilter={addFilter} 
          updateFilter={updateFilter} 
          removeFilter={removeFilter} 
        />
      )}

      <Table data={filteredData} />
    </div>
  );
};

export default App;
