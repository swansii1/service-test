import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../../utils/constants/columns";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../redux/slices/apiSlice";
import { useSelector } from "react-redux";

export function Table() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  const search = useSelector((state) => state.search.search);

  const { data } = useGetUsersQuery({
    page,
    limit,
    search,
  });

  const users = data?.users || [];
  const total = data?.total || 0;

  const rows = users.map((obj) => {
    const [lastName, firstName, patronymic] = obj.fio.split(" ");
    const birthDate = new Date(obj.dateOfBirth);
    const age = new Date().getFullYear() - birthDate.getFullYear();

    return {
      id: obj.id,
      firstName,
      lastName,
      patronymic,
      gender: obj.gender,
      education: obj.education[0]?.level || "",
      email: obj.email,
      age,
    };
  });

  return (
    <Box
      sx={{
        height: 580,
        minWidth: 400,
        display: "flex",
        flexDirection: "column",
        borderRadius: 6,
        paddingBottom: 5,
      }}
    >
      <DataGrid
        sx={{
          margin: "0 auto",
          "&.MuiDataGrid-root": {
            backgroundColor: "#f0f8ff",
            border: "2px solid #1976d2",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#1976d2",
            color: "white",
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
          },
          "& .MuiDataGrid-row": {
            cursor: "pointer",
            backgroundColor: "#ffffff",
            "&:nth-of-type(even)": {
              backgroundColor: "#f5f5f5",
            },
            "&:hover": {
              backgroundColor: "#e3f2fd",
            },
          },
          minWidth: "40%",
          maxWidth: "100%",
          padding: 2,
          "& .MuiDataGrid-cell": {
            "&:focus": {
              outline: "none !important",
            },
            "&:focus-within": {
              outline: "none !important",
            },
          },
        }}
        rows={rows}
        columns={columns}
        rowCount={total}
        pagination
        paginationMode="server"
        paginationModel={{ page: page - 1, pageSize: limit }}
        onPaginationModelChange={(model) => {
          setPage(model.page + 1);
          setLimit(model.pageSize);
        }}
        onRowClick={(params) => navigate(`/citizens/user/${params.row.id}`)}
      />
    </Box>
  );
}
