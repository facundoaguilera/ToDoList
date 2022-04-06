import react from "react";

function InputTask(params) {

    return (
    <input value={params.value} type="text" placeholder="Add Task" onChange={params.handleChange} ></input>
            )
    }
export default InputTask;