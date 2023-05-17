import React from 'react'
import Dashboard from '../Dashboard'
import AllTasks from '../All Tasks'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTask from '../Add Task'
import OverdueTasks from '../Overdue Tasks'

const HomePage = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} >
              <Route path='' element={<AllTasks />} />
              <Route path='add-task' element={<AddTask />} />
              <Route path='overdue-tasks' element={<OverdueTasks />} />
            </Route>
          </Routes>
        </BrowserRouter>
  )
}

export default HomePage