import { Route, Routes } from "react-router-dom";
import Forma from "../UI/Form";
import { EducationData } from "../UserData/EducationData";
import { FamilyData } from "../UserData/FamilyData";
import { PassportData } from "../UserData/PasportData";
import { useMemo } from "react";
import { UserNav } from "../UI/UserNav";

export function UserNavigateData({ user, className }) {
  const userId = useMemo(() => user.id, [user.id]);

  return (
    <div className={`bg-white rounded-lg shadow-md w-full ${className}`}>
      <UserNav userId={userId} />

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
