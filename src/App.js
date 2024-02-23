import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSettings from "./components/TodoSettings";
import { ReactComponent as ThemeButtonLight } from "./assets/images/icon-sun.svg";
import { ReactComponent as ThemeButtonDark } from "./assets/images/icon-moon.svg";
import { translateService } from "./components/translateService";

function App() {
  const LOCAL_STORAGE_TODO_KEY = "todoList.key";
  const LOCAL_STORAGE_FILTER_KEY = "filter.key";
  const LOCAL_STORAGE_THEME_KEY = "theme.key";

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [todos, setTodos] = useState([]);
  const [filterOption, setFilterOption] = useState("all");
  const [activeFilterStyle, setActiveFilterStyle] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const STORED_TODOS = localStorage.getItem(LOCAL_STORAGE_TODO_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_KEY))
      : [];
    setTodos(STORED_TODOS);

    const STORED_FILTER = localStorage.getItem(LOCAL_STORAGE_FILTER_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_FILTER_KEY))
      : "all";
    setFilterOption(STORED_FILTER);

    const STORED_THEME = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME_KEY))
      : "dark";
    setTheme(STORED_THEME);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_FILTER_KEY,
      JSON.stringify(filterOption)
    );
  }, [filterOption]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(theme));
  }, [theme]);

  function handleAddTodo(input) {
    const inputRefValue = input.current.value;
    if (!inputRefValue || /^\s*$/.test(inputRefValue)) return null;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random() * 1000,
        textContent: inputRefValue,
        complete: false,
        isEditing: false,
      },
    ]);
    input.current.value = "";
  }

  function handleToggleEdit(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function handleUpdateTodo(input, id) {
    if (!input || /^\s*$/.test(input)) return null;
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, textContent: input, isEditing: !todo.isEditing }
          : todo
      )
    );
  }

  function handleCheckTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              complete: !todo.complete,
              timestamp: !todo.complete ? new Date().toISOString() : undefined,
            }
          : todo
      )
    );
  }

  function handleClearTodo() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.complete));
  }

  function handleDeleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function handleTranslate(selectedLanguage) {
    const texts = todos.map((todo) => todo.textContent);

    Promise.all(texts.map((text) => translateService(text, selectedLanguage)))
      .then((translations) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo, index) => ({
            ...todo,
            textContent: translations[index],
          }))
        );
      })
      .catch((error) => console.error("Translation error:", error));
  }

  useEffect(() => {
    function handleFilters() {
      switch (filterOption) {
        case "active":
          setFilteredTodos(todos.filter((todo) => !todo.complete));
          setActiveFilterStyle("active");
          setSearchInput("");
          break;
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.complete));
          setActiveFilterStyle("completed");
          setSearchInput("");
          break;
        case "search":
          setFilteredTodos(
            todos.filter((todo) =>
              todo.textContent.toLowerCase().includes(searchInput.toLowerCase())
            )
          );
          break;
        default:
          setFilteredTodos(todos);
          setActiveFilterStyle("all");
          setSearchInput("");
      }
    }
    handleFilters();
  }, [todos, filterOption, searchInput]);

  function handleThemeChange() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  function Clock() {
    const [currentTime, setCurrentTime] = useState(
      new Date().toLocaleTimeString()
    );

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

    return <div className="clock">{currentTime}</div>;
  }

  return (
    <div
      className={`app-body background-${theme}`}
      data-theme={theme}
    >
      <div className="app-container">
        <header>
          <h1>TODO</h1>
          <button
            className="btn-theme"
            title={
              theme === "dark"
                ? "Change to Light Theme"
                : "Change to Dark Theme"
            }
            onClick={handleThemeChange}
          >
            {theme === "dark" ? <ThemeButtonLight /> : <ThemeButtonDark />}
          </button>
        </header>
          <div className="additional-container">
            <div className="language-container">
              <label htmlFor="languageDropdown">Select Language:</label>
              <select
                id="languageDropdown"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>

              <button
                className="btn-translate"
                onClick={() => handleTranslate(selectedLanguage)}
              >
                Translate
              </button>
            </div>
            <div className="clock-container">
              <Clock />
            </div>
          </div>
        <main>
          <TodoForm handleAddTodo={handleAddTodo} />
          <div className="section-aside-container">
            <TodoList
              todos={todos}
              filteredTodos={filteredTodos}
              activeFilterStyle={activeFilterStyle}
              handleCheckTodo={handleCheckTodo}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleEdit={handleToggleEdit}
              handleUpdateTodo={handleUpdateTodo}
              LOCAL_STORAGE_TODO_KEY={LOCAL_STORAGE_TODO_KEY}
            />
            <TodoSettings
              todos={todos}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              setFilterOption={setFilterOption}
              activeFilterStyle={activeFilterStyle}
              setActiveFilterStyle={setActiveFilterStyle}
              handleClearTodo={handleClearTodo}
            />
          </div>
        </main>
        <p className="dnd">Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
