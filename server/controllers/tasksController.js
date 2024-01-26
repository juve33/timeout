const Task = require('../models/Task')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// @desc Get all tasks 
// @route GET /tasks
// @access Private
const getAllTasks = asyncHandler(async (req, res) => {
    // Get all tasks from MongoDB
    const tasks = await Task.find().lean()

    // If no tasks 
    if (!tasks?.length) {
        return res.status(400).json({ message: 'No tasks found' })
    }

    res.json(tasks)
})

// @desc Create new task
// @route POST /tasks
// @access Private
const createNewTask = asyncHandler(async (req, res) => {
    const { userID, title, tags, date } = req.body

    // Confirm data
    if (!userID || !title) {
        return res.status(400).json({ message: 'All fields are required 1' })
    }

    // Check for duplicate title
    const duplicate = await Task.findOne({ title }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate task title' })
    }

    // Create and store the new user 
    const task = await Task.create({ userID, title, tags, date })

    if (task) { // Created 
        return res.status(201).json({ message: 'New task created' })
    } else {
        return res.status(400).json({ message: 'Invalid task data received' })
    }

})

// @desc Update a task
// @route PATCH /tasks
// @access Private
const updateTask = asyncHandler(async (req, res) => {
    const { _id, userID, title, tags, date, completed } = req.body

    // Confirm data
    if (!_id || !userID || !title || !date || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required 2' })
    }

    // Confirm task exists to update
    const task = await Task.findById(_id).exec()

    if (!task) {
        return res.status(400).json({ message: 'Task not found' })
    }

    // Check for duplicate title
    const duplicate = await Task.findOne({ title }).lean().exec()

    // Allow renaming of the original task 
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate task title' })
    }

    task.title = title
    task.tags = tags
    task.date = date
    task.completed = completed

    const updatedTask = await task.save()

    res.json(`'${updatedTask.title}' updated`)
})

// @desc Delete a task
// @route DELETE /tasks
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Task ID required' })
    }

    // Confirm task exists to delete 
    const task = await Task.findById(id).exec()

    if (!task) {
        return res.status(400).json({ message: 'Task not found' })
    }

    const result = await task.deleteOne()

    const reply = `Task '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllTasks,
    createNewTask,
    updateTask,
    deleteTask
}