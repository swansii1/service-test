import "./App.css";
import { Header } from "./components/Header";
import { Sidedbar } from "./components/Sidebar";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main_container">
        <Sidedbar/>
        <Table />
      </div>
    </div>
  );
}

export default App;
