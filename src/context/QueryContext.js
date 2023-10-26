import React, { createContext, useEffect, useState } from "react";

import { generateSavedQueries, runQuery } from "../api/query";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEditorContext } from "./EditorContext";

export const QueryContext = createContext();

const QueryContextProvider = (props) => {
  const { activeTab, setActiveTab, tabsData, updateTab, setTabsData } =
    useEditorContext();
  const [recentQueries, setRecentQueries] = useState([]);
  const [savedQueries, setSavedQueries] = useLocalStorage(
    "savedQueries",
    generateSavedQueries()
  );

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    executionTime: null,
    rowsReturned: null,
    rowsAffected: null,
  });

  useEffect(() => {
    if (activeTab) {
      setResult(tabsData[activeTab].result);
      setError(tabsData[activeTab].error);
      setLoading(tabsData[activeTab].loading);
      setStats(tabsData[activeTab].stats);
    } else {
      setResult(null);
      setError(null);
      setLoading(false);
      setStats({
        executionTime: null,
        rowsReturned: null,
        rowsAffected: null,
      });
    }
  }, [activeTab, tabsData]);

  const executeQuery = () => {
    console.log("executing query");
    const queryResult = {
      ...tabsData[activeTab],
      result: null,
      loading: true,
      error: null,
      stats: {
        executionTime: null,
        rowsReturned: null,
        rowsAffected: null,
      },
    };
    updateTab(queryResult.id, queryResult);
    runQuery(tabsData[activeTab].value)
      .then((res) => {
        console.log(res);
        queryResult.result = res.result;
        queryResult.stats = res.stats;
      })
      .catch((err) => {
        console.log(err);
        queryResult.error = err.message;
      })
      .finally(() => {
        queryResult.loading = false;
        updateTab(queryResult.id, queryResult);
        setRecentQueries([queryResult, ...recentQueries]);
      });
  };

  const saveQuery = async () => {
    setSavedQueries([tabsData[activeTab], ...savedQueries]);
  };

  const loadQuery = (query) => {
    if (query.id in tabsData && tabsData[query.id].value === query.value) {
      if (query.id !== activeTab) {
        setActiveTab(query.id);
      }
      return;
    }
    setTabsData({ ...tabsData, [query.id]: query });
    setActiveTab(query.id);
  };

  return (
    <QueryContext.Provider
      value={{
        result,
        error,
        loading,
        stats,
        recentQueries,
        savedQueries,
        executeQuery,
        saveQuery,
        loadQuery,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  );
};

const useQueryContext = () => React.useContext(QueryContext);

export { useQueryContext };

export default QueryContextProvider;
