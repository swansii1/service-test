import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { fetchUsers } from "../redux/slices/apiSlice";
import photo from "../assets/placeholder.png";
import { PassportData } from "../components/UserData/PasportData";
import { EducationData } from "../components/UserData/EducationData";
import { FamilyData } from "../components/UserData/FamilyData";
import Spiner from "../components/UI/Spin";
import Forma from "../components/UI/Form";

export function AccountUserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (!users || users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users]);

  if (loading) return <Spiner />;
  if (error) return <div>Ошибка: {error}</div>;
  if (!users || users.length === 0) return <div>Нет данных</div>;

  const user = users.find((u) => String(u.id) === id);
  if (!user) return <div>Пользователь не найден</div>;

  const btnNav = [
    {
      to: `/citizens/user/${user.id}/passportdata`,
      title: "Паспортные данные",
    },
    {
      to: `/citizens/user/${user.id}/familyInfo`,
      title: "Семья",
    },
    {
      to: `/citizens/user/${user.id}/education`,
      title: "Образование",
    },
  ];

  return (
    <div className="flex w-full justify-around gap-5 p-4">
      <div className="flex gap-5 bg-gray-100 rounded-lg shadow-md w-100 flex-col items-center p-4">
        <img
          className="rounded-full border border-gray-300 mt-5 w-32 h-32 object-cover"
          src={photo}
          alt="avatar"
        />
        <div className="flex flex-col gap-3 bg-blue-50 rounded-lg w-full p-4">
          <h2 className="text-2xl font-bold text-gray-800">{user.fio}</h2>
          <h3 className="text-lg font-light text-gray-600">
            Дата рождения: {user.dateOfBirth}
          </h3>
          <h4 className="text-base text-gray-600">Email: {user.email}</h4>
          <p className="text-gray-600">Телефон: {user.phone}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md w-full">
        <nav className="pt-3 pb-3 bg-blue-50 rounded-t-lg w-full">
          <ul className="flex justify-evenly">
            {btnNav.map((item, idx) => (
              <li key={idx} className="px-3">
                <NavLink
                  onClick={() => setFormVisible(false)}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                      : "text-gray-700 hover:text-blue-500 transition-colors duration-200"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6">
          <Routes>
            <Route index element={<Forma user={user} />} />
            <Route path="passportdata" element={<PassportData user={user} />} />
            <Route path="familyInfo" element={<FamilyData user={user} />} />
            <Route path="education" element={<EducationData user={user} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
