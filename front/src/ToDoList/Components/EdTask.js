import react from "react";

function EdTask(params) {
    return(
            <div>
                <p><h3>Editing Task "{params.updatedVal.title}"</h3></p>
               <input placeholder={params.updatedVal.title} onChange={params.handleEdition}></input>
               <button className="btn btn-outline-success" disabled={params.disable} onClick={params.handleSave}>Save</button>
               <button className="btn btn-outline-secondary" onClick={params.handleCancel}>Cancel</button>
               {/* <button onClick={params.handleErase}>Delete</button> */}
            </div>
                   
           )
}

export default EdTask;