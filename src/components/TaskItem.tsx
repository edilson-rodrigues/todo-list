import { Trash } from 'phosphor-react';

import styles from './TaskItem.module.css';

interface ITask {
    id: string;
    label: string;
    isChecked: boolean;
}

interface TaskItemProps {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function TaskItem({ task, onDelete, onComplete }: TaskItemProps) {
    const taskDelete = () => onDelete(task.id);

    const taskComplete = () => onComplete(task.id);

    return (
        <div className={styles.taskItem}>
            <label className={styles.container}>
                <input
                    type="checkbox"
                    checked={task.isChecked}
                    onChange={taskComplete}
                />
                <span className={styles.checkMark}></span>
                <p>{task.label}</p>
            </label>

            <button onClick={taskDelete}>
                <Trash size='1.125rem' />
            </button>
        </div>
    )
}