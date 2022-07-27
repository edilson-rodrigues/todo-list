import styles from './Header.module.css';
import rocketLogo from '../assets/rocket-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={rocketLogo} alt='Logotipo do Rocket ToDo' />
                <strong>to</strong>
                <strong>do</strong>
            </div>
        </header>
    )
}