'use client';

import { useState } from 'react'
import styles from './confess.module.css'

export default function Confess() {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        message: ''
    });
    const handleChange = (e: any) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // todo: Handle form submission logic here
    };

    return (
        <form className={styles.input_form} onSubmit={handleSubmit}>
            <div className={styles.top_layer}>
                <div className={styles.input_group}>
                    <label htmlFor="from">From</label>
                    <input
                        type="text"
                        id={styles.from}
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="to">To</label>
                    <input
                        type="text"
                        id={styles.to}
                        name="to"
                        value={formData.to}
                        onChange={handleChange}
                        required />
                </div>
            </div>
            <div className={styles.message_area}>
                <label htmlFor="message" >Message</label>
                <textarea
                    id={styles.message}
                    name="message"
                    rows={10}
                    value={formData.message}
                    onChange={handleChange}
                    required />
            </div>
            <button type="submit" className={styles.submit_button}>
                Submit
            </button>
        </form>
    )
}