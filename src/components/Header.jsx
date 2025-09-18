import { useState } from "react";

export function Header() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">SERVICE</h1>
      <div className="text-gray-700">Привет, Администратор.</div>
      <form onSubmit={handleSearchSubmit} className="flex-grow max-w-md mx-4">
        <input
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="search"
          placeholder="Поиск по ФИО, СНИЛС..."
          value={inputText}
        />
      </form>
    </header>
  );
}
