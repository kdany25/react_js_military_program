import "./roadlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoad, getRoad } from "../../redux/apiCalls";

export default function RoadList() {
  const dispatch = useDispatch();
  const roads = useSelector((state) => state.road.roads);

  useEffect(() => {
    getRoad(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteRoad(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "road",
      headerName: "Roads",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src="https://i.ibb.co/Yyt2P4b/Capture.png" alt="" />
            {params.row.place}
          </div>
        );
      },
    },

    {
      field: "desc",
      headerName: "desc",
      width: 150,
    },
    {
      field: "kmreached",
      headerName: "KM",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/roads/" + params.row._id}>
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
      <h1>Roads</h1>
      <Link to="/newroad">
        <button className="userAddButtons">+Add </button>
      </Link>
      <DataGrid
        rows={roads}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
