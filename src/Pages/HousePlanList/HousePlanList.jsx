import "./style.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, CloseOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHousePlan, getHousePlan } from "../../redux/apiCalls";

export default function HousePlanList() {
  const dispatch = useDispatch();
  const [ budget,setBudget ] = useState();
  const [ modalData,setModalData ] = useState();
  const [ totalCost,setTotalCost ] = useState(0);
  const [ showModal,setShowModal ] = useState({ status:false,total:0 });
  const housePlans = useSelector((state) => state.houseplan.housePlans);

  useEffect(() => {
    getHousePlan(dispatch);
  }, [dispatch]);

  useEffect(()=>{

    if(housePlans[0]){
      let sum = 0;

      for(const one of housePlans){
        sum += Number(one.cost)
      }

      setTotalCost(sum)
    }

  },[housePlans])

  const handleDelete = (id) => {
    deleteHousePlan(id, dispatch);
  };

  const handleSort = (ev) => {
    ev.preventDefault();
    // Sort activities with  
    let totalSum = 0, newPlans = [];
    //
    for(let p=5; p>0; p-- ){
      // Priority loop
      for(let i=0; i<housePlans.length; i++){
        const plan = housePlans[i];
        let newSum = Number(plan.cost) + totalSum;
        //
        if( plan.priority === p  && newSum < budget ){
          totalSum = newSum;
          newPlans.push(plan)
        }
        //
        if(totalSum > budget){
          break;
        }
      }
      
      if(totalSum > budget){
        break;
      }
    }
    //
    setModalData(newPlans)
    toggleModal(totalSum)
  }  
  
  const toggleModal = (total) => {
    setShowModal(prev => ({ 
      total: total || 0,
      status: !prev.status 
    }))
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "location",
      headerName: "location",
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
    <>
      <div className="userList">
        <h1>House Activities</h1>
        <div className="sort-wrapper" >
          <p>Calculating labor and material cost, creating timetables with targets goals</p>
          <form onSubmit={handleSort}>
            <input 
              min="1" 
              type="number" 
              // value={budget} 
              placeholder="Enter the amount" 
              onChange={(ev)=>setBudget(ev.target.value)} 
            />
            <button >Calculate</button>
          </form>
        </div>
        <div className="header">
        <Link to="/newHousePlan">
          <button className="userAddButtons">Add activity</button>
        </Link>
          <h5>Total cost of all activities <strong>{totalCost.toLocaleString()} M</strong> </h5>
        </div>
        <DataGrid
          rows={housePlans}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={8}
          checkboxSelection
        />
      </div>
        {
          showModal.status &&
          <div className="modal-wrapper">
            <div className="overlay" onClick={toggleModal} />
            <section>    
              <header className="header">
                <p> 
                  <strong>{modalData.length}</strong> of <strong>{housePlans.length}</strong>  activities are eligible, worth <strong>{showModal.total} M</strong> of  a <strong>{budget} M</strong> Budget
                </p>  
                <CloseOutlined className="closeBtn" onClick={toggleModal} />
              </header>  
              <DataGrid
                  rows={modalData}
                  disableSelectionOnClick
                  columns={columns}
                  getRowId={(row) => row._id}
                  pageSize={8}
                  style={{ flex:1 }}
                  checkboxSelection
                />
            </section>
          </div>
        }
    </>
  );
}
