import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../redux/slices/apiSlice";
import Spiner from "../components/UI/Spin";
import { UserProfileCard } from "../components/user/UserProfileCard";
import { UserNavigateData } from "../components/user/UserNavigateData";

export function AccountUserPage() {
  const { id } = useParams();

  const { data: user, isLoading, isError } = useGetUserByIdQuery(id);

  if (isLoading) return <Spiner />;
  if (isError) return <div>Ошибка при загрузке данных</div>;
  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div className="flex w-full justify-around gap-5 p-4">
      <UserProfileCard user={user} />

      <UserNavigateData user={user} />
    </div>
  );
}
