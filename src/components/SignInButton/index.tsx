import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'


export function SignInButton(){

    const isUserLoggedIn = true;
    
    return isUserLoggedIn ? (
        <button type="button" className={styles.SignInButton}>
            <FaGithub color="#04d361"/>    
            João Seixas
            <FiX color="#737380" className={styles.rightCloseIcon} />
        </button>):
        (   <button type="button" className={styles.SignInButton}>
                <FaGithub color="#eba417"/>    
                Sign in with Github
            </button>
        )
}