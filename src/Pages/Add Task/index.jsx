import React, { useState } from 'react'
import { AddTaskWrapper } from './AddTask.styled'
import { addTodo } from '../../services/action/index';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackBar } from '../../hooks/useSnakeBar';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const navigate = useNavigate();
  const showPopUp = useSnackBar();
  const dispatch = useDispatch();
  const [allTasks, setAllTasks] = useState(useSelector(state => state.todos));
  const currentDate = new Date().toISOString().split('T')[0];
  const [newTask, setNewTask] = useState({id:allTasks.length, name: '', due: '', start: currentDate, modified: currentDate, priority: 'High', context: '', location: '', done:false})
  const handleChange = (e) => { 
    let nam = e.target.name;
    let val = e.target.value;
    setNewTask({...newTask, [nam]:val})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTask));
    showPopUp("Task Added Successfully", "success")
    setNewTask({...newTask, priority:'High'})
    e.target.reset();
    navigate('/')
  }
  return (
    <AddTaskWrapper>
        <h2>Add a new Task</h2>
        <form onSubmit={handleSubmit}>
        <div className='addTask-input'>
              <label htmlFor="name">Task Name:</label>
              <input type='text' name="name" id="name" onChange={handleChange} placeholder='Enter Task Name' required/>
              <label htmlFor="due">Date Due:</label>
              <input type="date" name="due" id="due" min={currentDate} onChange={handleChange} required/>
              <label htmlFor="priority">Priority:</label>
              <select name="priority" id="priority" defaultValue={"High"} onChange={handleChange}>
                <option value="High">High</option>
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
              </select>
              <label htmlFor="context">Task Context:</label>
              <input type='text' name="context" id="context" onChange={handleChange} required placeholder='Enter Task Context' />
              <label htmlFor="location">Task Location:</label>
              <input type='text' name="location" id="location" onChange={handleChange} required placeholder='Enter Task Location' />
              <button type='submit'>Submit</button>
        </div>
        </form>
    </AddTaskWrapper>
  )
}

export default AddTask