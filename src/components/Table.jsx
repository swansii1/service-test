import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 110,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 150,
    editable: true,
  },
];

export function Table() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://68c9e2d8ceef5a150f66432a.mockapi.io/citizens/users",
        );
        const fetchedData = response.data;

        const formattedRows = fetchedData.map((obj) => {
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
      } catch (err) {
        console.error("Ошибка при получении данных:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          height: 400,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Загрузка данных...
      </Box>
    );
  }

  if (error) {
    return (
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
        Ошибка при загрузке: {error.message}
      </Box>
    );
  }

  return (
    <Box sx={{ height: 480, width: "70%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
