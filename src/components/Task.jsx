import React from 'react'

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
    return (
        <div className="list-item">
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </div>
        </div>
    )
}

export default Task
