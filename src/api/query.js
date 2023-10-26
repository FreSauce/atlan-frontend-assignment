import mockData from "./mockData.json";

export const runQuery = async (query, delay = 1000) => {
  //mock query response
  await sleep(delay);
  for (let key of Object.keys(mockData)) {
    if (query.includes(key)) {
      return {
        result: mockData[key],
        stats: {
          executionTime: Math.floor(Math.random() * 1000),
          rowsReturned: mockData[key].length,
          rowsAffected: 0,
        },
      }; //simulate network delay
    }
  }
  throw new Error("Query failed to execute");
};

export const generateSavedQueries = () => {
  const savedQueries = [];
  for (let key of Object.keys(mockData)) {
    let id = Math.floor(Math.random() * Math.pow(10, 13)).toString();
    savedQueries.push({
      id: id,
      name: `Query ${id.slice(-4)}`,
      language: "sql",
      value: `SELECT * FROM ${key};`,
      result: null,
      error: null,
      loading: false,
      stats: {
        executionTime: null,
        rowsReturned: null,
        rowsAffected: null,
      },
    });
  }
  return savedQueries;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
