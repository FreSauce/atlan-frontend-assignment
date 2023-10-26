import Layout from "./components/Layout";
import EditorContextProvider from "./context/EditorContext";
import QueryContextProvider from "./context/QueryContext";

function App() {
  return (
    <EditorContextProvider>
      <QueryContextProvider>
        <div className="h-screen dark:bg-gray-900 p-4 flex flex-col">
          <h1 className="text-3xl font-bold leading-none text-center text-gray-900 dark:text-white mb-2">
            SQL Editor
          </h1>
          <Layout />
        </div>
      </QueryContextProvider>
    </EditorContextProvider>
  );
}

export default App;
