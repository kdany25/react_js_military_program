import "./house.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { HouseRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Houses() {
  const [data, setData] = useState(HouseRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Owner",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.ownername}
          </div>
        );
      },
    },
    { field: "address", headerName: "", width: 130 },
    
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
    },
    {
      field: "new",
      headerName: "New House",
      width: 180,
    },
    {
        field: "people",
        headerName: "peoplein house",
        width: 120,
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/house/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <h1>House Built</h1>
      <Link to="/newHouse">
        <button className="userAddButtons">+ Add Record</button>
      </Link>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
