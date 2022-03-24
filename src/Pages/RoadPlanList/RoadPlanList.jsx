import "./style.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePatient, getRoadPlan } from "../../redux/apiCalls";

export default function RoadPlanList() {
  const dispatch = useDispatch();
  const roadPlans = useSelector((state) => state.roadplan.roadPlans);

  useEffect(() => {
    getRoadPlan(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deletePatient(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "patient",
      headerName: "patient",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src="https://i.ibb.co/xqFwFwx/plan.jpg" alt="" />
            {params.row.location}
          </div>
        );
      },
    },

    {
      field: "kmreached",
      headerName: "KM",
      width: 120,
    },
    {
      field: "period",
      headerName: "period",
      width: 120,
    },
    {
      field: "engineer",
      headerName: "engineer",
      width: 160,
    },
    {
        field: "cost",
        headerName: "cost",
        width: 120,
      },
      {
        field: "priority",
        headerName: "priority",
        width: 130,
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/Health/" + params.row._id}>
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
      <h1>Roads Activities</h1>
      <Link to="/new">
        <button className="userAddButtons">Add plan</button>
      </Link>
      <DataGrid
        rows={roadPlans}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
