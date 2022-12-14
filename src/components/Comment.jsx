import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gabrielaz318.png" alt="" />
        <div className={styles.commentBox}>    
            <div className={styles.commentContent}>
                <header>
                    
                    <div className={styles.authorAndTime}>
                        <h5>Bielzin Brabo dos Código.</h5>
                        <time title="23 de Outubro às 11:52" dateTime="2022-10-23">Cerca de 1h atrás</time>
                    </div>
                    
                    <button title="Deletar comentário">
                        <Trash size={24} />
                    </button>
                </header>

                <p>Ta quase chegando no nivel dos "Caras"!</p>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>

        </div>
    )
}