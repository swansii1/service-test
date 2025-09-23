import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../utils/const/columns";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spiner from "./UI/Spin";

export function Table({ users }) {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [inputText, setInputText] = useState("");

  const { loading, error } = useSelector((state) => state.users);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  {
    loading && <Spiner />;
  }

  {
    error && (
      <Box
        sx={{
          height: 400,
          width: "100%",
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Ошибка при загрузке: {error}
      </Box>
    );
  }

  const filteredRows = rows.filter((row) =>
    `${row.firstName} ${row.lastName}`
      .toLowerCase()
      .includes(inputText.toLowerCase()),
  );

  useEffect(() => {
    const formattedRows = users.map((obj) => {
      const nameParts = obj.fio.split(" ");
      const firstName = nameParts[1];
      const lastName = nameParts[0];

      const gender = obj.gender;
      const email = obj.email;

      const birthDate = new Date(obj.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();

      return {
        id: obj.id,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        email: email,
        age: age,
      };
    });

    setRows(formattedRows);
  }, [users]);

  return (
    <div className="bg-white rounded-lg shadow-md m-4">
      <Box
        sx={{
          height: 580,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <div className="mx-auto pt-1">
          <form onSubmit={handleSearchSubmit} className="w-100">
            <input
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              placeholder="Поиск по ФИО..."
              value={inputText}
            />
          </form>
        </div>
        <DataGrid
          sx={{ cursor: "pointer" }}
          rows={filteredRows}
          columns={columns}
          onRowClick={(params) => navigate(`/citizens/user/${params.row.id}`)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[8]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
