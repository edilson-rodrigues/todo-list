import styles from './TaskInfo.module.css';

interface TaskInfoProps {
    title: string
    taskCount: number
    taskCountCompleted?: number
}

export function TaskInfo({
    title,
    taskCount = 0,
    taskCountCompleted = 0,

}: TaskInfoProps) {
    return (
        <div className={styles.taskInfo}>
            <span className={styles.purple}>{title}</span>
            {taskCountCompleted > 0
                ? (
                    <span>{taskCountCompleted} de {taskCount}</span>
                )
                : (
                    <span>{taskCount}</span>
                )
            }
        </div>
    )
}