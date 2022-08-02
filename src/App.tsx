import { useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';

import styles from './App.module.css';

interface ITask {
  id: string;
  label: string;
  isChecked: boolean;
}

type Tasks = ITask[];

export default function App() {
  const [tasks, setTasks] = useState<Tasks>([]);

  function createTask(task: ITask) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskId: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task.id !== taskId;
    })

    setTasks(tasksWithoutDeleteOne);
  }

  function taskCompleted(taskId: string) {
    const taskIsChecked = tasks.filter((task) => {
      if (task.id == taskId) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });

    setTasks(taskIsChecked);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask
          onCreate={createTask}
        />
        <main>
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onComplete={taskCompleted}
          />
        </main>
      </div>
    </div>
  )
}
