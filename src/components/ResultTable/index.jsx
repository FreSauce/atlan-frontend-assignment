import { useQueryContext } from "../../context/QueryContext";
import Spinner from "../Spinner";
import QueryError from "./QueryError";
import Table from "./Table";

const ResultTable = () => {
  const { result, loading, error } = useQueryContext();
  return (
    <div className="h-full flex flex-col overflow-clip border border-gray-200 rounded-lg shadow bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      {loading ? (
        <Spinner />
      ) : error ? (
        <QueryError errorMessage={error} />
      ) : result ? (
        <Table result={result} />
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-800 dark:text-gray-400 flex">
            Execute the query to see the result here
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultTable;
