import { useGetTasksQuery } from './tasksApiSlice';
import Task from './Task';

const TasksList = () => {
    const {
        data: tasks,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTasksQuery(undefined, {
        pollingInterval: 20000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    });

    let content;

    if (isLoading) {
        content = <p>Loading ...</p>;
    }

    if (isError) {
        content = <p className='errmsg'>{error?.data?.message}</p>;
    }

    if (isSuccess) {
        const { ids } = tasks;
        content = ids?.length ? ids.map(taskId => <Task key={taskId} taskId={taskId} />) : null;
    }

    return content;
};

export default TasksList;
