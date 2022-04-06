import react from "react";

function AddButton(params) {
    return(
        <button onClick= {params.handleClick}>Add Task</button>
    )
}

export default AddButton;