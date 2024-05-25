import React from "react";
import "react-data-grid/lib/styles.css";
import Datagrid from "react-data-grid";

const columns = [
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
  {
    key: "update",
    name: "Update",
  },
];
const rows = [
  { id: 0, title: "ID" },
  { id: 1, title: "Title" },
  { id: 2, title: "Mani" },
];
function ReactDatagrid() {
  return (
    <div>
      <h1>React Data Grid Library</h1>
      <Datagrid columns={columns} rows={rows} />
    </div>
  );
}

export default ReactDatagrid;
