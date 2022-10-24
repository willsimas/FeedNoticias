import styles from './Post.module.css';
import { HandWaving } from 'phosphor-react'
import { Comment } from './Comment'
import { Avatar } from './Avatar';


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://github.com/willsimas.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Willian Simas</strong>
                        <span>Web Developer</span>
                    </div>

                </div>
                    <time title="21 de Outubro às 19:12h" dateTime="2022-10-21 20:12:20">Publicado há 1hr</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera <HandWaving size={20} /></p>
                <p>Acabei de subir mais um projeto no meu portifólio.🚀</p>
                <p>👉{' '}<a href="#"> jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto</a>{' '} 
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <h5>Deixe seu feedback</h5>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    );
}

