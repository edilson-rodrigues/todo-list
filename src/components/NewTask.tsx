import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';

export function NewTask() {
    return (
        <div className={styles.newTask}>
            <header className={styles.wrapper}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button>
                    <span>Criar</span>
                    <PlusCircle size='1rem' />
                </button>
            </header>
        </div>
    )
}