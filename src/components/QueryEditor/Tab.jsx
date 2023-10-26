import { PlusSmallIcon, XMarkIcon } from "@heroicons/react/24/solid"

import { useEditorContext } from "../../context/EditorContext"

const Tab = ({ tab, isNewTab }) => {
  const { activeTab, setActiveTab, closeTab, createNewTab } = useEditorContext()
  return (
    <div
      className={`cursor-pointer mx-1  px-1 border-b-2 rounded-t-lg flex self-end  ${!isNewTab && activeTab === tab.id
        ? "active text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
        : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        }`}>
      {isNewTab ? (
        <div className="p-3" onClick={createNewTab}>
          <PlusSmallIcon className="w-5 h-5 text-gray-200 hover:text-white" />
        </div>
      ) : (
        <>
          <div
            className="p-3 hover:text-white whitespace-nowrap min-w-fit max-w-[150px] text-start"
            onClick={() => setActiveTab(tab.id)}>
            {tab.name}
          </div>
          <div className="py-3" onClick={() => closeTab(tab.id)}>
            <XMarkIcon className="w-5 h-5 hover:text-white" />
          </div>
        </>
      )}
    </div>
  )
}

export default Tab
