import { TaskInfo } from './TaskInfo';

import styles from './Task.module.css';

import clipboard from '../assets/clipboard-icon.svg';

export function Task() {
    return (
        <article className={styles.task}>
            <header>
                <TaskInfo
                    title='Tarefas criadas'
                    taskCount={0}
                />
                <TaskInfo
                    title='Concluídas'
                    taskCount={5}
                    taskCountCompleted={2}
                />
            </header>
            <div className={styles.noTask}>
                <img src={clipboard} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus a fazer</p>
            </div>
        </article>
    );
} 