import { useEditorContext } from "../../context/EditorContext";
import { useQueryContext } from "../../context/QueryContext";
import Button from "./Button";
import Tab from "./Tab.jsx";

const EditorNavbar = () => {
  const { tabs, activeTab } = useEditorContext();
  const { executeQuery, saveQuery } = useQueryContext();
  return (
    <div className="flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <div className="flex flex-nowrap -mb-px overflow-y-auto">
        {tabs.map((tab, index) => (
          <Tab key={tab.id} tab={tab} index={index} />
        ))}
      </div>
      <Tab key="new-tab" isNewTab={true} />
      <div className="flex-1"></div>
      <div className="flex items-center justify-center justify-self-end min-w-fit gap-2 px-3 py-2">
        <Button
          onClick={executeQuery}
          disabled={!activeTab}
          text="Execute"
          className="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 
          focus:ring-green-300 dark:focus:ring-green-800 disabled:bg-green-900 disabled:hover:bg-green-900"
        />
        <Button
          onClick={saveQuery}
          disabled={!activeTab}
          text="Save"
          className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700           
          focus:ring-blue-300 dark:focus:ring-blue-800 disabled:bg-blue-900 disabled:hover:bg-blue-900"
        />
      </div>
    </div>
  );
};

export default EditorNavbar;
