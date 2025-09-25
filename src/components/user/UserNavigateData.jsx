import { NavLink, Route, Routes } from "react-router-dom";
import Forma from "../UI/Form";
import { EducationData } from "../UserData/EducationData";
import { FamilyData } from "../UserData/FamilyData";
import { PassportData } from "../UserData/PasportData";

const btnNav = [
  { key: "passport", to: "passportdata", title: "Паспортные данные" },
  { key: "family", to: "familyInfo", title: "Семья" },
  { key: "edu", to: "education", title: "Образование" },
];

export function UserNavigateData({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-md w-full lg:w-2/3">
      <nav className="pt-3 pb-3 bg-blue-50 rounded-t-lg">
        <ul className="flex flex-wrap justify-evenly">
          {btnNav.map((item) => (
            <li key={item.key} className="px-3">
              <NavLink
                to={`/citizens/user/${user.id}/${item.to}`}
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
  );
}
