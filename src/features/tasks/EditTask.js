import React from 'react'
import { useSelector } from 'react-redux'
import { selectTaskById } from './tasksApiSlice'
import EditTaskForm from './EditTaskForm'
import { useParams } from 'react-router-dom'

const EdiEditTaskFormForm = () => {
    const { id } = useParams()
    const task = useSelector(state => selectTaskById(state, id))

    const content = task ? <EditTaskForm task={task} /> : <p>'loding ...'</p>

    return content
}

export default EdiEditTaskFormForm