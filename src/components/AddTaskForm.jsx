function AddTaskForm({ handleSubmit, handleChange, newTask}) {
    
    return(
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={handleChange} placeholder="Agrega una tarea"/>
            <button type="submit">Agregar tarea</button>
        </form>
    </>
    )
};

export default AddTaskForm;