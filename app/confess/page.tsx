import styles from './confess.module.css'

export default function Confess() {
    return (
        <form action="/api/form" method="post" className={styles.input_form}>
            <div className={styles.top_layer}>
                <div className={styles.input_group}>
                    <label htmlFor="to">To</label>
                    <input type="text" id="to" name="to" required />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="from">From</label>
                    <input type="text" id="from" name="from" required />
                </div>
            </div>
            <div className={styles.message_area}>
                <label htmlFor="message" >Message</label>
                <textarea id="message" name="message" rows={10} required />
            </div>
            <button type="submit" className={styles.submit_button}>Submit</button>
        </form>
    )
}