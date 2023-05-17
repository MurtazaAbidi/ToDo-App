import { MdAssignment, MdOutlineWatchLater } from "react-icons/md"
import {CgPlayListAdd} from 'react-icons/cg'
import {GoSignOut} from 'react-icons/go'


export const DashboardMenuItems = [
    {
        name: 'All Tasks', 
        icon: <MdAssignment/>,
        link: ''
    },
    {
        name: 'Add Task', 
        icon: <CgPlayListAdd/>,
        link: 'add-task'
    },
    {
        name: 'Overdue Tasks', 
        icon: <MdOutlineWatchLater/>,
        link: 'overdue-tasks'
    },
    {
        name: 'logout', 
        icon: <GoSignOut/>,
        link: 'logout'
    },
    
]