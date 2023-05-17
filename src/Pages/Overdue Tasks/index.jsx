import React, { useEffect, useState } from 'react'
import { OverdueTasksWrapper } from './OverdueTasks.styled'
import { useSelector } from 'react-redux';
import { Checkbox, Space, Table, Tag } from 'antd';
import { changeName, markTodoAsReverse } from '../../services/action';
import {BsCheck2All} from 'react-icons/bs'
import { useDispatch } from 'react-redux';

const OverdueTask = () => {
    const [allTasks, setAllTasks] = useState(useSelector(state => state.todos));
    const currentDate = new Date().toISOString().split('T')[0];
    useEffect(()=>{
      setAllTasks(allTasks.filter(todo => todo.due < currentDate))
    },[])
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, element, index) => <input type="text" defaultValue={text} onChange={(e)=>{dispatch(changeName(index, e.target.value))}} style={{border: 'none',outline: 'none',backgroundColor: 'transparent'}} required/>,
        },
        {
            title: 'Date Due',
            dataIndex: 'due',
            key: 'due',
        },
        {
            title: 'Start Date',
            dataIndex: 'start',
            key: 'start',
        },
        {
            title: 'Modified Date',
            dataIndex: 'modified',
            key: 'modified',
        },

        {
            title: 'Priority',
            key: 'priority',
            dataIndex: 'priority',
            render: (_, { priority }) => (
                <Tag color={priority === 'High' ? 'volcano' : priority === 'Normal' ? 'geekblue' : 'green'}>
                    {priority.toUpperCase()}
                </Tag>
            )
        },
        {
            title: 'Context',
            dataIndex: 'context',
            key: 'context',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },


        {
            title: 'Done',
            key: 'done',
            dataIndex: 'done',
            render: (_, done, index) => (
                <Space size="middle">
                    {allTasks[index].done==true?<BsCheck2All color='blue'/>:<Checkbox type='checkbox' name='done' defaultValue={done} onChange={(e) => { console.log(e.target.checked, index),dispatch(markTodoAsReverse(index, e.target.checked)); }} />}
                </Space>
            ),
        },
    ];

    return (
        <OverdueTasksWrapper>
            <h2>OverDue Tasks</h2>
            <Table columns={columns} dataSource={allTasks} />
        </OverdueTasksWrapper>
    )
}

export default OverdueTask