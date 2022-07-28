import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';

import styles from './App.module.css';


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <main>
          <Task />
        </main>
      </div>
    </div>
  )
}
