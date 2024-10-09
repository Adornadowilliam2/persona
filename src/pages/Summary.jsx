import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Summary({ data, user }) {
  const rows = [...data, ...user].map((item, index) => ({
    id: index + 1,
    name: item.name,
    image: item.image,
  }));

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "image",
      headerName: "Image",
      renderCell: (params) => (
        <img
          src={params.value}
          alt={params.row.name}
          style={{ width: 50, height: 50 }}
        />
      ),
      flex: 1,
    },
  ];

  return (
    <>
      <h1>Persona Characters</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        autoHeight
      />
    </>
  );
}
