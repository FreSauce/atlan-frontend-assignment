import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Layout from "./components/Layout";
import EditorContextProvider from "./context/EditorContext";
import QueryContextProvider from "./context/QueryContext";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  return (
    <EditorContextProvider>
      <QueryContextProvider>
        <div className="h-screen bg-gray-100 dark:bg-gray-900 p-4 flex flex-col">
          <div className="flex items-center justify-between p-2">
            <h1 className="flex-grow  text-3xl font-bold leading-none text-center text-gray-900 dark:text-white">
              SQL Editor
            </h1>
            <button onClick={toggleTheme} id="theme-toggle" type="button" className="self-end text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 max-w-fit">
              {!isDarkTheme ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
          </div>

          <Layout />
        </div>
      </QueryContextProvider>
    </EditorContextProvider>
  );
}

export default App;
