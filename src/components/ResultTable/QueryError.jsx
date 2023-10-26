import { XCircleIcon } from "@heroicons/react/24/solid";

const QueryError = ({ errorMessage }) => {
  return (
    <div className="h-full flex flex-col align-center justify-center">
      <div className="flex align-center justify-center">
        <XCircleIcon className="h-12 w-12 text-red-400 mx-2" />
        <div className="flex flex-col max-w-[300px]">
          <h5 className="flex text-lg font-bold leading-none text-gray-900 dark:text-gray-200 ">
            {errorMessage}
          </h5>
          <p className="flex text-sm leading-none text-gray-900 dark:text-gray-400 py-2">
            Try running one of the saved queries. Query engine is not connected
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueryError;
