import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "JUNE", width: 90 },
  { field: "habit1", headerName: "Habit 1", width: 150 },
  { field: "habit2", headerName: "Habit 2", width: 150 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  { id: 13, habit1: "Meditate", habit2: "Exercise" },
  { id: 14, habit1: "Meditate", habit2: "Exercise" },
  { id: 15, habit1: "Meditate", habit2: "Exercise" },
  { id: 16, habit1: "Meditate", habit2: "Exercise" },
  { id: 17, habit1: "Meditate", habit2: "Exercise" },
  { id: 18, habit1: "Meditate", habit2: "Exercise" },
  { id: 19, habit1: "Meditate", habit2: "Exercise" },
  { id: 20, habit1: "Meditate", habit2: "Exercise" },
];

export default function June2() {
  const divStyle = {
    marginLeft: "10px",
    height: 400,
    width: "80%",
  };
  return (
    <div style={divStyle}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
