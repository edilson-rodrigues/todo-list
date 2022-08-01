import { TaskInfo } from './TaskInfo';

import styles from './Tasks.module.css';

import clipboard from '../assets/clipboard-icon.svg';
import { TaskItem } from './TaskItem';


interface ITask {
    id: string;
    label: string;
    isChecked: boolean;
}

interface TasksProps {
    tasks: ITask[]
};


export function Tasks({ tasks }: TasksProps) {
    const createdTaskCount = tasks.length;

    const completedTaskCount = tasks.reduce((total, task) => {
        return task.isChecked ? total + 1 : total;
    }, 0);

    console.log(tasks);
    console.log(completedTaskCount);

    function deleteTask(){}

    return (
        <article className={styles.tasks}>
            <header>
                <TaskInfo
                    title='Tarefas criadas'
                    taskCount={createdTaskCount}
                />
                <TaskInfo
                    title='Concluídas'
                    taskCount={createdTaskCount}
                    completedTaskCount={completedTaskCount}
                />
            </header>
            <>
                {
                    tasks.length === 0 ? (
                        <div className={styles.noTask}>
                            <img src={clipboard} />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus a fazer</p>
                        </div>
                    ) : <></>
                }
            </>
            <div className={styles.taskItem}>
                {tasks.map(task => {
                    return (<TaskItem label={task.label} />)
                })}

            </div>
        </article>
    );
} 