import react,{useState, useEffect} from "react";
import InputTask from "./Components/InputTask"
import AddButton from "./Components/Button"
import List from "./Components/List"
import EdTask from "./Components/EdTask";
import Formulario from "./Components/Formulario";
import axios from "axios";
import Cookies from '../../node_modules/js-cookie/dist/js.cookie.min.mjs'

// axios.defaults.xsrfHeaderName="X-CSRFTOKEN";
// axios.defaults.xsrfCookieName="csrftoken";

function ToDoListContainer(params) {
    const [task, setTask] = useState("")
    const[list,setList] = useState([])
    const[editionList,setEditionList] = useState("")
    const [edition,setEdition] = useState({})
    const [state,setState] = useState({'title':'', 'completed':false})
    const [csrf,setCsrf] = useState("")
  
    function handleChange(event) {
        setTask(event.target.value)
            }
    function handleClick(){
        const Url="http://127.0.0.1:8000/api/tasks/"
        const listCopy = list.slice()
        listCopy.push(task)
        setList(listCopy)
        axios({method:'post',
        url: Url,
        data:{'title':task, 'completed':false}, 
        headers:{ 'Content-type':'application/json',
        'X-CSRFToken':csrf}                       
    }).then(response => console.log(response)).catch(err=> console.log(err));
        setTask("")
            }
    
   function handleEdit(taskIndex){
    let updatedValue = {}
    const editTask = list.filter((task,index)=>index===taskIndex)
    // setEdTask(editTask)
    // console.log(editTask, taskIndex)
    updatedValue = {'id':'', 'task':editTask[0], 'index':taskIndex}
    setEdition(updatedValue)
    console.log(edition)
    //console.log(editTask[0])
    console.log(edition)
      }
    function handleEdition(event){
        let editionList= list.slice()
        editionList[edition.index]=event.target.value
        console.log( editionList)
        setEditionList(editionList)
    }
    function handleSave(){
        setList(editionList)
        setEdition({})
    }
    function handleCancel(){
        setEdition({})
    }
    function handleErase(){
        const filterList = list.filter((task,index)=>index!==edition.index)
        setList(filterList)
        setEdition({})
       }
    
    useEffect(()=>{
        const Url="http://127.0.0.1:8000/api/tasks/"
        axios({method:'get',
        url: Url,
        headers:{ 'Content-type':'application/json',
        'X-CSRFToken':csrf}                       
    }).then(response => {setList(response.data.map( data => data.title  )) }).catch(err=> console.log(err));
       },[])
              
    return(
        <div>
            <h1>To-Do List </h1>
            <InputTask value={task} handleChange={handleChange}/>
            <AddButton handleClick={handleClick}></AddButton>
            <List handleEdit={handleEdit} list={list}></List>
            {edition.task && <EdTask updatedVal={edition} handleEdition={handleEdition} handleSave={handleSave} handleCancel={handleCancel} handleErase={handleErase}></EdTask>}
            
        </div>
    )
}

export default ToDoListContainer;