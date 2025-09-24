import { Table } from "../components/Table";
import Spiner from "../components/UI/Spin";
import { useGetUsersQuery } from "../redux/slices/apiSlice";

export function Citizens() {
  const { data, error, isLoading } = useGetUsersQuery({ page: 1, limit: 8 });

  if (isLoading) return <Spiner />;
  if (error) return <p>Ошибка: {error.toString()}</p>;
  if (!data || !data.users || data.users.length === 0) return <p>Нет данных</p>;

  return <Table users={data.users} total={data.total} />;
}
