import { useQueryContext } from "../../context/QueryContext"

const QueryTab = ({ query }) => {
  const { loadQuery } = useQueryContext()
  return (
    <li
      className="py-3 select-none cursor-pointer"
      onClick={() => loadQuery(query)}>
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {query.name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {query.value.replace("-- Start by writing a query here", "")}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {query.result ? (
            <div className="w-2 h-2 rounded-full bg-green-500 ring-1 ring-green-400/50  ml-2"></div>
          ) : query.error ? (
            <div className="w-2 h-2 rounded-full bg-red-500 ring-1 ring-red-400/50  ml-2"></div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-gray-500 ring-1 ring-gray-400/50  ml-2"></div>
          )}
        </div>
      </div>
    </li>
  )
}

export default QueryTab
