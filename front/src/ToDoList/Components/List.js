import react from "react";

function List(params) {

    return ( 
        <ul>
            {params.list.map((task,index) => <li key={index}> <input type="checkbox"></input> {task} <button onClick={()=> params.handleEdit(index)}>Editar</button></li>) }
        </ul>
    )
}

export default List;