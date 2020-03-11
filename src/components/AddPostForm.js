import React, { useState } from 'react';

const AddPostForm = (props) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addPost({
            title,
            category,
            content,
        })
        props.history.push('/')
    }

    const handleCancel = () => {
        props.history.push('/')
    }

    return (
        <div className="container">
            <h3>add a post</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    title
            <input name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    category
            <input name='category' value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div>
                    content
            <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button>add</button>
            </form>
            <button onClick={handleCancel}>cancel</button>
        </div>
    )
}

export default AddPostForm