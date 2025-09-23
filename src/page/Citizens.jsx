import { useSelector } from "react-redux";
import { Table } from "../components/Table";
import Spiner from "../components/UI/Spin";

export function Citizens() {
  const { data: users, loading, error } = useSelector((state) => state.users);

  if (loading) return <Spiner />;
  if (error) return <p>Ошибка: {error}</p>;
  if (!users || users.length === 0) return <p>Нет данных</p>;

  return <Table users={users} />;
}
