import react from "react";

function EdTask(params) {
    return(
            <div>
                <p>Editing Task "{params.updatedVal.title}"</p>
               <input placeholder={params.updatedVal.title} onChange={params.handleEdition}></input>
               <button onClick={params.handleSave}>Save</button>
               <button onClick={params.handleCancel}>Cancel</button>
               {/* <button onClick={params.handleErase}>Delete</button> */}
            </div>
                   
           )
}

export default EdTask;