import { Trash } from 'phosphor-react';

import styles from './TaskItem.module.css';

interface TaskItemProps {
    label: string;
}

export function TaskItem({label}: TaskItemProps) {
    return (
        <div className={styles.taskItem}>
            <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkMark}></span>
                <p>{label}</p>
            </label>

            <button>
                <Trash size='1.125rem' />
            </button>
        </div>
    )
}