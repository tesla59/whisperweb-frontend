import styles from './ConfessionCard.module.css'

interface Props {
    to: string
    from: string
    message: string
}

export default function ConfessionCard({ to, from, message }: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.to}>To: {to} </div>
            <div className={styles.from}>From: {from} </div>
            <div className={styles.message}>Message: {message} </div>
        </div>
    )
}
