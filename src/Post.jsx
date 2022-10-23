import styles from './components/Post.module.css';

export function Post(props) {
    return (
        <div className={styles.post}>
            <h5>{props.author}</h5>
            <p>{props.content}</p>
        </div>
    )
}