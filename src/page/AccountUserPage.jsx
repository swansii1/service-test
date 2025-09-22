import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchUsers } from "../redux/slices/apiSlice";
import photo from "../assets/placeholder.png";
import { PassportData } from "../components/UserData/PasportData";
import { EducationData } from "../components/UserData/EducationData";
import { FamilyData } from "../components/UserData/FamilyData";

export function AccountUserPage() {
  const { id } = useParams();
  const toNumberId = Number(id);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(pathname);

  const { data: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (!users || users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!users) return <div>Нет данных</div>;

  const user = users.find((u) => u.id === toNumberId);

  if (!user) return <div>Пользователь не найден</div>;

  const btnNav = [
    { to: `/citizens/user/${user.id}/passportdata`, title: "Паспортные данные" },
    { to: `/citizens/user/${user.id}/familyInfo`, title: "Семья" },
    { to: `/citizens/user/${user.id}/education`, title: "Образование" },
  ];

  return (
    <div className="flex w-full justify-around gap-5">
      <div className="flex gap-5 bg-fuchsia-100 w-150 flex-col items-center">
        <img
          className="rounded-full border border-black mt-5 w-1/2"
          src={photo}
          alt="avatar"
        />
        <div className="flex flex-col gap-5 bg-blue-200 w-full p-4">
          <h2 className="text-2xl font-bold">{user.fio}</h2>
          <h3 className="text-xl font-light">
            Дата рождения: {user.dateOfBirth}
          </h3>
          <h4 className="text-base">Email: {user.email}</h4>
          <p>Телефон: {user.phone}</p>
        </div>
      </div>

      <div className="bg-white w-full">
        <nav className="pt-2 pb-2 bg-blue-100 w-full">
          <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
            {btnNav.map((item, idx) => (
              <li key={idx} className="px-2">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-light border-b-1"
                      : "text-gray-700 hover:text-blue-500"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Routes>
            <Route path="passportdata" element={<PassportData user={user} />} />
            <Route path="familyInfo" element={<FamilyData user={user} />} />
            <Route path="education" element={<EducationData user={user} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
