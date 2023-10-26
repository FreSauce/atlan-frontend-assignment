import { useQueryContext } from "../../context/QueryContext";
import QueryTab from "./QueryTab";

const SavedQueries = () => {
  const { savedQueries } = useQueryContext();

  return (
    <div className="w-full h-full flex flex-col p-4 bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Saved Queries
        </h5>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto flex flex-col px-2">
        {savedQueries.map((query, index) => {
          return <QueryTab key={index} query={query} />;
        })}
      </ul>
    </div>
  );
};

export default SavedQueries;
