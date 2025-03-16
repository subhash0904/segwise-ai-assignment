import React from "react";

interface TableProps {
  data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">SNo</th>
            <th className="p-2">Creative Name</th>
            <th className="p-2">Country</th>
            <th className="p-2">Ad Network</th>
            <th className="p-2">CTR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t hover:bg-gray-100">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{item.creative_name}</td>
              <td className="p-2">{item.country}</td>
              <td className="p-2">{item.ad_network}</td>
              <td className="p-2">{item.ctr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
