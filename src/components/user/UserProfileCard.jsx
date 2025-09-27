import photo from "../../assets/placeholder.png";

export function UserProfileCard({ user, className }) {
  return (
    <div
      className={`border-red-100 flex flex-col items-center gap-5 bg-gray-100 rounded-lg shadow-md p-4 ${className}`}
    >
      <img
        className="rounded-full border border-gray-300 mt-5 w-42 h-42 object-cover"
        src={user.image || photo}
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
  );
}
