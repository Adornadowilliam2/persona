import React from "react";
import { data, user } from "../index";
import { DataGrid } from "@mui/x-data-grid";

export default function Summary() {
  // Flatten the data into a format suitable for DataGrid
  const rows = [...data, ...user].map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
  }));

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1, // This allows the column to grow and shrink
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
      <h1>Hello world</h1>
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
