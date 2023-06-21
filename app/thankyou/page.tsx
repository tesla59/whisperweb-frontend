import styles from './thankyou.module.css'

export default function ThankYou() {
    return (
        <div className={styles.container}>\
            <div>
                <div className={styles.upper_text}>Thank You</div>
                <div className={styles.lower_text}>Your confession has been recorded</div>
            </div>
        </div>
    )
}
