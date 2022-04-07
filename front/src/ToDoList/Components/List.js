import react from "react";

function List(params) {

    return ( 
        <ul >
            {params.list.map((task,index) => 
            <li className="container" key={index}> 
                <div className="row align-items-start">
                    <div className="col"><input className="form-check-input" type="checkbox" checked={task.completed} onClick={() => params.handleCheckBox(task,index)}>
                        </input> 
                    </div>
                    <div className="col"><h5>{task.title} </h5> </div>
                    <div className="col">
                      <button id="editBtn" className="btn btn-outline-secondary" onClick={()=> params.handleEdit(task)}>Edit</button>
                      <button id="delBtn" className="btn btn-outline-danger" onClick={()=> params.handleErase(task,index)}>Delete</button>
                    </div>
                </div>
            </li>) }
        </ul>
    )
}

export default List;