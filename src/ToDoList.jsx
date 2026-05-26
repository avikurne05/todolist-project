import React,{useState} from "react";
import './App.css';
function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function AddTask(){
        if(newTask.trim() !== ""){
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function DeleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index));  
    }

    function movetaskup(index){
        
    }

    function movetaskdown(index){
    }


    return(
        <div className="ToDoList">
            <h1>To Do List</h1>

            <div>
                <input type="text" 
                placeholder="Add a new task"
                value={newTask} 
                onChange={handleInputChange} />

                <button className="add-button" 
                onClick={AddTask}>Add Task

                </button>
            </div>
            <div className="task-count">
                Total Tasks: {tasks.length}
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">
                        {task}
                        </span>
                        <button className="delete-button" 
                        onClick={() => DeleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-up-button"
                        onClick={() => movetaskup(index)}>
                            Move Up
                        </button>
                        <button className="move-down-button"
                        onClick={() => movetaskdown(index)}>
                            Move Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;

