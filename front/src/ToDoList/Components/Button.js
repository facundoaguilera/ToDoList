import react from "react";

function AddButton(params) {
    return(
        <button class="btn btn-primary" disabled={() => Boolean(!params.tarea)}  onClick= {params.handleClick}>Add</button>
    )
}

export default AddButton;