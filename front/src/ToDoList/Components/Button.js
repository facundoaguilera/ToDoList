import react from "react";

function AddButton(params) {
    return(
        <button class="btn btn-warning" disabled={() => Boolean(!params.tarea)}  onClick= {params.handleClick}>Add</button>
    )
}

export default AddButton;