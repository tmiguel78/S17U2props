function Task( {task, deleteTask, markAsCompleted}) {
    return(
    <>
        <li onClick={() => markAsCompleted(task.id)}
            style={{
            textDecoration: task.completed ? "line-through" : "none"
        }}>
        {task.text}
        <button onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id)
            }}>Eliminar</button>
        </li>
    </>
    )
};

export default Task;