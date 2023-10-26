import { useEditorContext } from "../../context/EditorContext";
import { useQueryContext } from "../../context/QueryContext";

const QueryStats = () => {
  const { stats, result, loading, error } = useQueryContext();
  const { activeTab } = useEditorContext();
  return (
    <div className="w-full h-full flex flex-col p-4 border bg-gray-50 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Query Stats
        </h5>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Status
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {loading
              ? "Loading"
              : error
                ? "Failed"
                : result
                  ? "Succeded"
                  : activeTab
                    ? "Not Executed"
                    : "N/A"}
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Time to load
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {stats?.executionTime ? stats.executionTime + "ms" : "N/A"}
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Rows returned
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {stats?.rowsReturned ? stats.rowsReturned : "N/A"}
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Rows affected
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {stats?.rowsAffected != null ? stats.rowsAffected : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueryStats;
