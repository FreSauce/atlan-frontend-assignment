import React, { createContext, useMemo, useState } from "react";

export const EditorContext = createContext();

const EditorContextProvider = (props) => {
  const [tabsData, setTabsData] = useState({});
  const [activeTab, setActiveTab] = useState(null);

  const createNewTab = () => {
    const newTab = {
      id: Date.now().toString(),
      name: "New Tab",
      language: "sql",
      value: "-- Start by writing a query here\n",
      result: null,
      error: null,
      loading: false,
      stats: {
        executionTime: null,
        rowsReturned: null,
        rowsAffected: null,
      },
    };
    newTab.name = `Query ${newTab.id.slice(-4)}`;
    setTabsData({ ...tabsData, [newTab.id]: newTab });
    setActiveTab(newTab.id);
  };

  const closeTab = (id) => {
    const newTabs = { ...tabsData };
    delete newTabs[id];
    let newActiveTab = Object.keys(newTabs)[Object.keys(newTabs).length - 1];
    setActiveTab(newActiveTab || null);
    setTabsData(newTabs);
  };

  const updateTab = (id, newData) => {
    const newTabs = { ...tabsData };
    newTabs[id] = { ...newTabs[id], ...newData };
    setTabsData(newTabs);
  };

  const tabs = useMemo(() => {
    return Object.keys(tabsData).map((id) => tabsData[id]);
  }, [tabsData]);

  return (
    <EditorContext.Provider
      value={{
        activeTab,
        setActiveTab,
        tabs,
        tabsData,
        setTabsData,
        closeTab,
        updateTab,
        createNewTab,
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

const useEditorContext = () => React.useContext(EditorContext);

export { useEditorContext };

export default EditorContextProvider;
