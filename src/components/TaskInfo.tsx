import styles from './TaskInfo.module.css';

interface TaskInfoProps {
    title: string
    taskCount: number
    completedTaskCount?: number
}

export function TaskInfo({
    title,
    taskCount = 0,
    completedTaskCount,

}: TaskInfoProps) {
    return (
        <div className={styles.taskInfo}>
            <span className={styles.purple}>{title}</span>
            {completedTaskCount != null
                ? (
                    <span>{completedTaskCount} de {taskCount}</span>
                )
                : (
                    <span>{taskCount}</span>
                )
            }
        </div>
    )
}