import { Post } from '../Post'
import styles from './Aside.module.css'


export function Aside() {
    return (
        <div className={styles.aside}>
        <Post author="Gabriel MONSTRO" content="É o brabo dos DEV" /> 
        </div>
    )
}