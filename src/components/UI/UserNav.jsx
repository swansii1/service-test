import { NavLink } from "react-router-dom";
import { memo } from "react";

const btnNav = [
  { key: "passport", to: "passportdata", title: "Паспортные данные" },
  { key: "family", to: "familyInfo", title: "Семья" },
  { key: "edu", to: "education", title: "Образование" },
];

export const UserNav = memo(({ userId }) => {
  return (
    <nav className="pt-3 pb-3 bg-blue-50 rounded-t-lg">
      <ul className="flex flex-wrap justify-evenly">
        {btnNav.map((item) => (
          <li key={item.key} className="px-3">
            <NavLink
              to={`/citizens/user/${userId}/${item.to}`}
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
  );
});
