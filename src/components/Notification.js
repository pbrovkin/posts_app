import React from 'react'

const Notification = ({ message }) => {
    const notifStyle = {
        color: ''
    }
    if (message.includes('added')) {
        notifStyle.color = 'green'
    }
    if (message.includes('deleted')) {
        notifStyle.color = 'red'
    }
    return (
        <div style={notifStyle} className="container">
            <p className="notification">{message}</p>
        </div>
    )
}

export default Notification