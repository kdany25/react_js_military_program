import "./house.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHouse, getHouse } from "../../redux/apiCalls";

export default function Houses() {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.house.houses);

  useEffect(() => {
    getHouse(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteHouse(id, dispatch);
    console.log("----")
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "house",
      headerName: "House",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src="https://i.ibb.co/hDX2G1n/house.jpg" alt="" />
            {params.row.owner}
          </div>
        );
      },
    },
    { field: "address", headerName: "Address", width: 130 },
    
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
    },
    {
      field: "peopleInhouse",
      headerName: "people live in ",
      width: 180,
    },
    {
        field: "newHouse",
        headerName: "new House?",
        width: 120,
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/house/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
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
        rows={houses}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
