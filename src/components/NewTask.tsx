import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';

export function NewTask() {
    return (
        <article className={styles.article}>
            <header>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button>
                    <span>Criar</span>
                    <PlusCircle size='1.25rem' />
                </button>
            </header>
        </article>
    )
}