import React from "react";
import Task from "./Task";
const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
	const events = {
		onPinTask,
		onArchiveTask,
	};

	if (loading) {
		return <div className="list-items">loading</div>;
	}

	if (tasks.length === 0) {
		return <div className="list-items">empty</div>;
	}
	return (
		<div>
			{tasks.map((task) => (
				<Task key={task.id} task={task} {...events} />
			))}
		</div>
	);
};

export default TaskList;
