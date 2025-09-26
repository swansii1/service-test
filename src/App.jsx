import "./App.css";
import { Header } from "./components/UI/Header";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Citizens } from "./pages/Citizens";
import { AccountUserPage } from "./pages/AccountUserPage";
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
