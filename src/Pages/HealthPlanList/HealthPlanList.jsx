import "./style.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePatient, getHealthPlan } from "../../redux/apiCalls";

export default function HealthPlanList() {
  const dispatch = useDispatch();
  const healthplans = useSelector((state) => state.healthplan.healthPlans);

  useEffect(() => {
    getHealthPlan(dispatch);
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
            <img className="userListImg" src="https://i.ibb.co/RYKPGGJ/Healthcare.jpg" alt="" />
            {params.row.location}
          </div>
        );
      },
    },

    {
      field: "number",
      headerName: "number",
      width: 150,
    },
    {
      field: "period",
      headerName: "period",
      width: 120,
    },
    {
      field: "desease",
      headerName: "desease",
      width: 160,
    },
    {
        field: "cost",
        headerName: "cost",
        width: 160,
      },
      {
        field: "priority",
        headerName: "priority",
        width: 160,
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
      <h1>Patient List</h1>
      <Link to="/new">
        <button className="userAddButtons">Add patient</button>
      </Link>
      <DataGrid
        rows={healthplans}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
