import react,{useState, useEffect} from "react";
import InputTask from "./Components/InputTask"
import AddButton from "./Components/Button"
import List from "./Components/List"
import EdTask from "./Components/EdTask";

import axios from "axios";
import Cookies from '../../node_modules/js-cookie/dist/js.cookie.min.mjs'

// axios.defaults.xsrfHeaderName="X-CSRFTOKEN";
// axios.defaults.xsrfCookieName="csrftoken";

function ToDoListContainer(params) {
    const [task, setTask] = useState("")
    const[list,setList] = useState([])
    const [taskToEdit,setTaskToEdit] = useState({})
    const [editedTask,setEditedTask] = useState()
    //const [csrf,setCsrf] = useState("")

    const sendGetRequest= async () => {
            
            const resp = await axios({method:'get', url:'http://127.0.0.1:8000/api/tasks/',
       });
            setList(resp.data)
            
            console.log("entro en la funcion",'list',list,resp.data);
        
    }
    const sendPostRequest= async (postTask) => {
        try {
            const data={'title':task,'completed':false}
            const resp = await axios.post('http://127.0.0.1:8000/api/tasks/',data);
            const edlist = list.slice()
            edlist.push(resp.data)
            setList(edlist)
                    
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
    function handleChange(event) {
        setTask(event.target.value)
            }
    function handleClick(){
        const Url="http://127.0.0.1:8000/api/tasks/"
        sendPostRequest(task);
        sendGetRequest()
        setTask("")
        
               }

    function handleEdit2(taskIndex){
    const taskToEdition = list.filter((task)=>task.id===taskIndex.id)
    setTaskToEdit(taskToEdition[0])
        }

    function handleEdition2(event){
        setEditedTask(event.target.value)
            }

    function handleSave(){
        taskToEdit.title = editedTask
        console.log('editada:',taskToEdit)
        axios
        .put(`http://localhost:8000/api/tasks/${taskToEdit.id}/`, taskToEdit)
         setTaskToEdit({})
                          }
                 
    function handleCheckBox(tarea,taskIndex){
        
        tarea.completed = !tarea.completed
        console.log('editada:',tarea)
        axios
        .put(`http://localhost:8000/api/tasks/${tarea.id}/`,tarea)
        .then(res => {console.log(res); 
            const listcop = list.slice();
            listcop[taskIndex] =  tarea;
            setList(listcop); } )
            
    }

    function handleCancel(){
        setTaskToEdit({})
    }

    function handleErase(taskToDel,taskIndex){
        axios
        .delete(`http://localhost:8000/api/tasks/${taskToDel.id}/`)
        .then(res => {console.log('delete',res);
        const filterList = list.filter((task,index) => index!==taskIndex);
         setList(filterList)                       }
        )
         setTaskToEdit({});
         
            }
    
    useEffect(()=>{
        const Url="http://127.0.0.1:8000/api/tasks/"
        axios({method:'get',
        url: Url,                            
    }).then(response => setList(response.data)).catch(err=> console.log(err)); //.map( data => data.title  )) 
       },[])
    const disabled = task== ''    
    const disabled2 = editedTask==''      
    return(
        <div class="container">
            <h1>To-Do List </h1>
            <InputTask value={task} handleChange={handleChange}/>
            <AddButton disabled={disabled} handleClick={handleClick}></AddButton>
            <List handleErase={handleErase} handleEdit={handleEdit2} list={list} handleCheckBox={handleCheckBox}></List>
            {taskToEdit.title && <EdTask updatedVal={taskToEdit} handleEdition={handleEdition2} handleSave={handleSave} handleCancel={handleCancel} disabled={disabled2}></EdTask>}
            
        </div>
    )
}

export default ToDoListContainer;