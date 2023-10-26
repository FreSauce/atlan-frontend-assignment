import { PlusSmallIcon } from "@heroicons/react/24/solid";
import { Editor } from "@monaco-editor/react";

import { useEditorContext } from "../../context/EditorContext";
import Spinner from "../Spinner";
import EditorNavbar from "./EditorNavbar";

const QueryEditor = () => {
  const { activeTab, tabsData, updateTab } = useEditorContext();
  return (
    <div className="h-full w-full bg-gray-800 overflow-hidden flex flex-col border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <EditorNavbar />
      <div className="flex-grow">
        {activeTab !== null ? (
          <Editor
            height="100%"
            language={tabsData[activeTab].language}
            value={tabsData[activeTab].value}
            defaultLanguage="sql"
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
            }}
            onChange={(value) => updateTab(activeTab, { value: value })}
            loading={<Spinner />}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 flex">
              Create a new Tab using{" "}
              <span>
                <PlusSmallIcon className="ml-2 h-6 w-6" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryEditor;
