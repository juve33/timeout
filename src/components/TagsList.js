import React from 'react'

const TagsList = (tasks, setTags) => {
    const tags = tasks.map(({ tag }) => tag);
    setTags(tags);

    return (
        <div>TagsList</div>
    )
}

export default TagsList