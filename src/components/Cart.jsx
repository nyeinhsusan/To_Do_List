/* eslint-disable no-restricted-globals */
import React from 'react'
const Cart = ({tasks,deleteTask,updateTask}) => {
  //console.log(tasks);//that is we check for array for loop and then we saw =>task 

//comfirm box 
const handleDeleteTask=(id)=>{
  if(confirm("Are you sure?")){
    deleteTask(id)
  }

}
  return (

  
    <div>
        {tasks.map((task) =>(
          // <div key ={task.id} className="list-group-item w-100 mt-3 shadow-sm-3">
          <div key ={task.id} className={task.complete ? "list-group-item w-100 mt-3 shadow-sm-3 shadow-sm bg-success text-decoration-line-through text-white":"list-group-item w-100 mt-3 shadow-sm-3"}>
          <div className="row">
            <div className="col-9 offset-1 m"><input type="checkbox" className='me-2' onClick={()=>updateTask(task.id ,!task.complete)} checked={task.complete}/>{task.task}</div>
            <div className="col-2">
              <i class="fa-solid fa-trash" onClick={()=>handleDeleteTask(task.id)}></i>
            </div>
          </div>
        </div>
        ))}
    </div>
  )
}

export default Cart
