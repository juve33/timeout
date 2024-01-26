import React, { useState, useEffect } from "react";
import { useAddNewTaskMutation } from "./tasksApiSlice";
import { useNavigate } from "react-router-dom";
import { TaskType } from "../../components/TaskType";
import { TagsList } from "../../components/TagsList";
//import { userID } from ".";

let userID = 1
const NewTask = () => {
    const navigate = useNavigate();
    const [addNewTask, { isLoading, isSuccess }] = useAddNewTaskMutation();

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        if (isSuccess) {
            resetForm();
            navigate('/main');
        }
    }, [isSuccess, navigate]);

    const resetForm = () => {
        setTitle('');
        setDate('');
        setType('');
        setSelectedTags([]);
    };

    const onSaveTaskClicked = async () => {
        if (canSave()) {
            await addNewTask({ user: userID, title, tags: selectedTags, type, date });
        }
    };

    const canSave = () => [title, date, type].every(Boolean) && !isLoading;

    return (
        <form onSubmit={(e) => e.preventDefault()} className="task-form">
            <label>Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
            <label>Select a Type:</label>
            {/* {<div className="Tags">
                <TaskType type={type} setType={setType} />
            </div>} 
            <label>Select tags:</label>
    <TagsList selectedTags={selectedTags} setTags={setSelectedTags} />*/}
            <div className="button-wrapper">
                <button onClick={() => { resetForm(); navigate("/home") }}>Cancel</button>
                <input onClick={onSaveTaskClicked} type="button" value="Submit" />
            </div>
        </form>
    );
};

export default NewTask;
