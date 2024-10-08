import React from "react";
import { data, user } from "../index";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../componets/Navbar";

export default function Summary() {
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
      <Navbar data={data} />
      <h1>Persona Characters</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        autoHeight
      />
      {console.log(rows)}
    </>
  );
}
