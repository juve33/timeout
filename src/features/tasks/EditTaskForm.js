import { useState, useEffect } from "react";
import { useUpdateTaskMutation, useDeleteTaskMutation } from "./tasksApiSlice";
import { useNavigate } from "react-router-dom";
//import { TaskType } from "../../components/TaskType";
//import { TagsList } from "../../components/TagsList";

const EdittaskForm = ({ task }) => {
    const navigate = useNavigate();

    const [updateTask, { isLoading, isSuccess }] = useUpdateTaskMutation();
    const [deleteTask, { isSuccess: isDelSuccess }] = useDeleteTaskMutation();

    const [title, setTitle] = useState(task.title || '');
    const [date, setDate] = useState(task.date || '');
    const [type, setType] = useState(task.type || '');
    const [selectedTags, setSelectedTags] = useState(task.tags || []);

    //let resetForm;

    // useEffect(() => {
    //     resetForm = () => {
    //         setTitle('');
    //         setDate('');
    //         setType('');
    //         setSelectedTags([]);
    //         navigate('/main');
    //     };
    //     if (isSuccess || isDelSuccess) {
    //         resetForm();
    //         navigate('/home');
    //     }
    // }, [isSuccess, isDelSuccess, navigate, resetForm()]);


    const onSaveTaskClicked = async () => {
        if (canSave()) {
            await updateTask({ id: task.id, user: task.userID, title, selectedTags, type, date });
        }
    };

    const onDeleteClicked = async () => {
        await deleteTask({ id: task.id });
    };

    const canSave = () => [title, date, type].every(Boolean) && !isLoading;

    return (
        <form onSubmit={e => e.preventDefault()} className="task-form">
            <label>Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
            {/*<label>Select a Type:</label>
            <div className="Tags">
                <TaskType type={type} setType={setType} />
            </div>
            <label>Select tags:</label>
            <TagsList selectedTags={selectedTags} setTags={setSelectedTags} />
            <div className="button-wrapper">
                <button onClick={resetForm}>Cancel</button>
                <button onClick={onDeleteClicked}>DELETE</button>
                <input onClick={onSaveTaskClicked} type="button" value="Submit" />
    </div>*/}
        </form>
    );
};

export default EdittaskForm;
