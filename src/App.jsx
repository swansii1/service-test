import "./App.css";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/slices/apiSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { data: users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <main className="main_container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/citizens" element={<Table users={users} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
