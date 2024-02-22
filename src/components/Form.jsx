import React,{useState} from "react";
const Form = ({submitTask}) => {
  //for create button with useRef
  //const userTask = useRef("")

  // for useState
  const [userTask,setUserTask] = useState('')
  // const submitTask=()=>{
  //   console.log('');
  //   console.log(userTask);
  // }

  // we need to write that function in app.js because app.js is main that why we use main in app.js 
  //and then we can post with pros.
  //We need to give parameter within onClick that also need to accept in app.js 
  const  FromSubmitHandling=()=>{
    submitTask(userTask);

    setUserTask('');
  }
  return (
    <div>
      <h1 className="mb-4">React To Do List Project</h1>
      <div className="row">
        <div className="col-6 offset-3">
          {/*  if you use useRef => you can write with input => Ref={userTask}*/}

          <input onChange={(e)=>setUserTask(e.target.value)} value={userTask}
            type="text" 
            className="form-control"
            placeholder="Enter your Task....."
          />
        </div>
        <div className="col-3">
          <button className="btn btn-success" type="button" onClick={()=>FromSubmitHandling()}><i class="fa-solid fa-plus"></i>Add</button>
        </div>
      </div>
    </div>
  );  
};

export default Form;
