import { PlusSmallIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { useEditorContext } from "../../context/EditorContext";

const Tab = ({ tab, isNewTab }) => {
  const { activeTab, setActiveTab, closeTab, createNewTab } =
    useEditorContext();
  return (
    <div
      className={`cursor-pointer mx-1  px-1 border-b-2 rounded-t-lg flex self-end  ${!isNewTab && activeTab === tab.id
        ? "active text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
        : "border-transparent text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-100 hover:border-gray-500  dark:hover:border-gray-400"
        }`}
    >
      {isNewTab ? (
        <div className="p-3" onClick={createNewTab}>
          <PlusSmallIcon className="w-5 h-5 " />
        </div>
      ) : (
        <>
          <div
            className="p-3 whitespace-nowrap min-w-fit max-w-[150px] text-start"
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </div>
          <div className="py-3" onClick={() => closeTab(tab.id)}>
            <XMarkIcon className="w-5 h-5" />
          </div>
        </>
      )}
    </div>
  );
};

export default Tab;
