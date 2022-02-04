import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'


export function SignInButton(){

    const isUserLoggedIn = false;
    const { data: session } = useSession()
    
    return session ? (
        <button type="button" className={styles.SignInButton}
        onClick={() => signOut()}
        >
            <FaGithub color="#04d361"/>    
            João Seixas
            <FiX color="#737380" className={styles.rightCloseIcon} />
        </button>):
        (   <button type="button" className={styles.SignInButton}
        onClick={() => signIn('GithubProvider')}
        >
                <FaGithub color="#eba417"/>    
                Sign in with Github
            </button>
        )
}