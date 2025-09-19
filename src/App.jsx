import "./App.css";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main_container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/citizens" element={<Table />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
