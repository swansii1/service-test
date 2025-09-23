import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/slices/apiSlice";
import { useEffect } from "react";
import { Citizens } from "./page/Citizens";
import { AccountUserPage } from "./page/AccountUserPage";
import "@ant-design/v5-patch-for-react-19";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />

      <main className="main_container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/citizens" element={<Citizens />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/citizens/user/:id/*" element={<AccountUserPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
