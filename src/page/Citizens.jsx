import { Table } from "../components/Table";
import { SearchUserInput } from "../components/UI/SearchUserInput";
import Spiner from "../components/UI/Spin";
import { useGetUsersQuery } from "../redux/slices/apiSlice";

export function Citizens() {
  const { data, error, isLoading } = useGetUsersQuery({ page: 1, limit: 8 });

  if (isLoading) return <Spiner />;
  if (error) return <p>Ошибка: {error.toString()}</p>;
  if (!data || !data.users || data.users.length === 0) return <p>Нет данных</p>;

  return (
    <div
      style={{
        height: 580,
        minWidth: 400,
        width: 1400,
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        backgroundColor: "rgba(255, 255, 255, 0.297)",
        borderRadius: 10,
        margin: "0 auto",
      }}
    >
      <SearchUserInput />
      <Table users={data.users} total={data.total} />
    </div>
  );
}
