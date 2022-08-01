import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './NewTask.module.css';

interface ITask {
    id: string;
    label: string;
    isChecked: boolean;
}

interface NewTaskProps {
    onCreate: (task: ITask) => void;
}

export function NewTask({ onCreate }: NewTaskProps) {

    const [newTaskText, setNewTaskText] = useState('');

    // capturando o texto do input
    const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('');

        const newTaskChange = event.target.value;

        setNewTaskText(newTaskChange);
    }

    // criando uma nova tarefa, quando submetemos no botão criar
    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        const task: ITask = {
            id: '1',
            label: newTaskText,
            isChecked: false,
        };

        if (newTaskText != '') {
            onCreate(task);
            setNewTaskText('');
        }
    }

    // custom alerta de campo obrigatório
    const handleNewTaskInvalid = async (
        event: InvalidEvent<HTMLInputElement>
    ) => {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    return (
        <div
            className={styles.newTask}
            onSubmit={handleCreateNewTask}
        >
            <form className={styles.wrapper}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button type="submit">
                    <span>Criar</span>
                    <PlusCircle size='1rem' />
                </button>
            </form>
        </div>
    )
}