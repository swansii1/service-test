import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../redux/slices/apiSlice";

export function AccountUserPage() {
  let { id } = useParams();
  let toNumberId = Number(id);
  const dispatch = useDispatch();
  let { data: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (!users || users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!users) return <div>Нет данных</div>;

  const user = users.find((u) => u.id === toNumberId);

  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div>
      <h2>{user.fio}</h2>
      <p>Дата рождения: {user.dateOfBirth}</p>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
    </div>
  );
}
