import React, { useEffect, useState } from "react";
import List from "./components/List";
import "./App.css";
import Form from "./components/Form";
import { api } from "./api/apiResource";
import uuid from "react-uuid";
const App = () => {
  // const fetchData = async () => {
  //   const data = await fetch("http://localhost:3001/todolist")
  //     .then((response) => response.json())
  //     .catch((error) => error.message);
  //   console.log(data);
  // };

  const [tasks, setTasks] = useState([]);
  const fetchData = async () => {
    const res = await api.get("todolist");

    //console.log(res.data); // why we call with data because all the value are in the data key when we run in the console
    setTasks(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [tasks]);

  //from form.js
    const submitTask= async(userTask)=>{
    // console.log('');
    //console.log(userTask);
   const data={
    
      "id": uuid(),
      "task": userTask, 
      "complete": false,
    
   };
  //  const res = await api.post("todolist",data);
  //  console.log(res.data); 
  //  }
 await api.post("todolist",data);

  }
    //delete function
    const deleteTask =async(task_id)=>{
    await api.delete(`/todolist/${task_id}`)
    }


    //update function 
    const updateTask = async(task_id,complete)=>{
      //console.log(task_id,complete_status);
      await api.patch(`/todolist/${task_id}`,{complete})
    }
  return (
    <div className="mx-auto mt-3 w-50">
      <Form submitTask={submitTask}/>
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
  );
};

export default App;
