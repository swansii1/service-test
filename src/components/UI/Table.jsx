import { useState, useEffect } from "react";
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsiveColumns =
    windowWidth < 600
      ? columns.filter((col) =>
          ["id", "firstName", "lastName"].includes(col.field),
        )
      : columns;

  return (
    <Box
      sx={{
        height: 580,
        width: "100%",
        maxWidth: 1000,
        minWidth: 320,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        paddingBottom: 2,
      }}
    >
      <DataGrid
        sx={{
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
            "&:nth-of-type(even)": { backgroundColor: "#f5f5f5" },
            "&:hover": { backgroundColor: "#e3f2fd" },
          },
          "& .MuiDataGrid-cell": {
            whiteSpace: "normal",
            wordWrap: "break-word",
            "&:focus": { outline: "none !important" },
            "&:focus-within": { outline: "none !important" },
          },
        }}
        rows={rows}
        columns={responsiveColumns.map((col) => ({
          ...col,
          flex: 1,
          minWidth: 100,
        }))}
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
