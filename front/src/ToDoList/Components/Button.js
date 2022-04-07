import react from "react";

function AddButton(params) {
    return(
        <button disabled={() => Boolean(!params.tarea)}  onClick= {params.handleClick}>Add Task</button>
    )
}

export default AddButton;