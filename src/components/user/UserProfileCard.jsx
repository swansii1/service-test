import photo from "../../assets/placeholder.png";

export function UserProfileCard({ user }) {
  return (
    <div className="flex flex-col items-center gap-5 bg-gray-100 rounded-lg shadow-md p-4 w-full lg:w-1/3">
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
  );
}
