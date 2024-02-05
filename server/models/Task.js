const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const taskSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        id: {
            type: Number,
            unique: true,
        },
        date: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        tags: {
            type: [String]
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

taskSchema.plugin(AutoIncrement, {
    inc_field: 'id',
    id: 'taskId',
    start_seq: 500
});

module.exports = mongoose.model('Task', taskSchema);
