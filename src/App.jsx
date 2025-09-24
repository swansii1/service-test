import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";
import { Citizens } from "./page/Citizens";
import { AccountUserPage } from "./page/AccountUserPage";
import "@ant-design/v5-patch-for-react-19";

function App() {
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
