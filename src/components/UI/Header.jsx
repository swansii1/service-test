import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center bg-white gap-4 rounded-lg shadow-md m-4 p-4">
      <h1
        className="text-gray-700 font-bold text-2xl sm:text-base max-w-[150px] sm:max-w-[200px] text-right"
        style={{ fontSize: "clamp(1.7rem, 2vw, 1rem)" }}
      >
        <Link to="/citizens">SERVICE</Link>
      </h1>

      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-4">
          <li>
            <Link
              to="/citizens"
              className="text-blue-600 hover:underline sm:text-base nav-btn"
            >
              Citizens
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="text-blue-600 hover:underline sm:text-base nav-btn"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      <div className="text-gray-700 font-bold text-sm sm:text-base max-w-[150px] sm:max-w-none text-right">
        Привет, Админ!
      </div>
    </header>
  );
}
