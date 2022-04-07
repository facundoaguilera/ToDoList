import react from "react";

function AddButton(params) {
    return(
        <button class="btn btn-warning" disabled={params.disabled}  onClick= {params.handleClick}>Add</button>
    )
}

export default AddButton;