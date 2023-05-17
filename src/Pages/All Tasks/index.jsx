import React, { useEffect, useRef, useState } from 'react'
import { AllTaskWrapper, FilterWrapper } from './AllTask.styled'
import { useSelector } from 'react-redux';
import { Checkbox, Space, Table, Tag } from 'antd';
import { changeName, markTodoAsReverse } from '../../services/action';
import {BsCheck2All} from 'react-icons/bs'
import { useDispatch } from 'react-redux';

const AllTasks = () => {
    const dragItem = useRef();
    const dragOverItem = useRef();
    const dragStart = (e, position) => {
        setDraggingItem(position);
        dragItem.current = position;
        console.log(e.target.innerHTML, position);
      };
    
      const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML, position);
      };
      const drop = (e) => {
        const copyListItems = [...formFeilds];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        setDraggingItem(null);
        dragOverItem.current = null;
        setFormFeilds(copyListItems);
      };
      const [allTasks, setAllTasks] = useState(useSelector(state => state.todos));
    const [searching, setSearching] = useState(allTasks)
    useEffect(()=>{
        // let data = [...allTasks];
        // data.sort((a, b) => a.name.localeCompare(b.name));
        // console.log(data);
        // setAllTasks(data);
    },[])
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, element, index) => <input type="text" defaultValue={text} onChange={(e)=>{dispatch(changeName(element.id, e.target.value))}} style={{border: 'none',outline: 'none',backgroundColor: 'transparent'}} required/>,
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
            render: (element, done, index) => (
                <Space size="middle">
                    {done.done==true?<BsCheck2All color='blue'/>:<Checkbox type='checkbox' name='done' defaultValue={done.done} onChange={(e) => { console.log(done,'aaaaa', element, index,e.target.checked, allTasks[index].id),dispatch(markTodoAsReverse(allTasks[index].id, e.target.checked)); }} />}
                </Space>
            ),
        },
    ];
    const performSearch = (searchText) => {

        const searchMatches = allTasks.filter((item) =>
          item.name.toLowerCase().startsWith(searchText)
        );
        return searchMatches;
      };
    const handleSearch = (e)=>{
        console.log(e.target.value)
        const searchText = e.target.value.toLowerCase();
        if (searchText.length > 0) {
            const searchMatches = performSearch(searchText);
            console.log(SearchMatches)
            setSearching(searchMatches);
          } else {
            setSearching(allTasks);
          }
    }
    return (
        <AllTaskWrapper>
            <h2>All Todo</h2>
            <FilterWrapper>
            <label htmlFor="Search">Search: </label>
              <input type='text' name="Search" id="Search" onChange={()=>{handleSearch}} placeholder='Search...' />
            {/* <select name="filter" id="filter" defaultValue={'name'}>
                <option value="name">Name</option>
                <option value="due">Date Due</option>
                <option value="Priority">Name</option>
                <option value="create">Create Date</option>
                <option value="modified">Modified Date</option>
            </select> */}
            </FilterWrapper>
            <Table columns={columns} dataSource={searching} />
        </AllTaskWrapper>
    )
}

export default AllTasks