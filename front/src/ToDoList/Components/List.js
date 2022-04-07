import react from "react";

function List(params) {

    return ( 
        <ul>
            {params.list.map((task,index) => <li key={index}> 
            <input type="checkbox" id="check" checked={task.completed} onClick={() => params.handleCheckBox(task,index)}></input> 
            {task.title} 
            <button onClick={()=> params.handleEdit(task)}>Edit</button>
            <button onClick={()=> params.handleErase(task,index)}>Delete</button>
            </li>) }
        </ul>
    )
}

export default List;