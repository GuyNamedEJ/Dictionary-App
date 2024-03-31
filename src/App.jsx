import { useState, createContext, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ErrorDisplay from "./components/ErrorDisplay";
import DefinitionDisplay from "./components/Definition Components/DefinitionDisplay";
import "./App.css";

const ThemeContext = createContext();
const SearchContext = createContext();

export default function App() {
  const getInitialState = () => {
    const initTheme = localStorage.getItem("Theme");
    return initTheme
      ? JSON.parse(initTheme)
      : {
          color: "light",
          font: "sans-serif",
          checked: false,
        };
  };

  const [theme, setTheme] = useState(getInitialState);
  const [searchTerm, setSearchTerm] = useState("keyboard");
  const [definition, setDefinition] = useState();

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = {
        ...prevTheme,
        color: prevTheme.color === "light" ? "dark" : "light",
        checked: !prevTheme.checked,
      };
      localStorage.setItem("Theme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const selectFont = (event) => {
    setTheme((prevTheme) => {
      const newTheme = {
        ...prevTheme,
        font: event.target.value,
      };
      localStorage.setItem("Theme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  useEffect(() => {
    async function searchDictionary() {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const data = await res.json();
      setDefinition(data[0]);
    }

    searchDictionary();
  }, [searchTerm]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, selectFont }}>
      <SearchContext.Provider value={{ setSearchTerm, definition }}>
        <main className={`${theme.color}-theme text-${theme.font}`}>
          <div className="container">
            <Header />
            <Search />
            {definition ? <DefinitionDisplay /> : <ErrorDisplay />}
          </div>
        </main>
      </SearchContext.Provider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, SearchContext };
