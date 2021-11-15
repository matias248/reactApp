import React from "react";
import Task from "./Task";

const TaskList = ({tasks}) =>
(<ul>
    {tasks.map(task => (
    <li key = {tasks.id}>
        <Task task ={task}></Task>
    </li>
    ))}
</ul>)

export default TaskList