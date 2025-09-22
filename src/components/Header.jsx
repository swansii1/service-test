import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">
        <Link to={"/citizens"}>SERVICE</Link>
      </h1>

      <nav className='w-1/2'>
        <ul>
          <li>
            <Link to="/citizens" className="text-blue-600 hover:underline">
              Citizens
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-blue-600 hover:underline">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      <div className="text-gray-700 font-bold">Привет, Админ!</div>
    </header>
  );
}
