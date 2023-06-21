'use client';

import { useState } from 'react'
import styles from './confess.module.css'
import { useRouter } from 'next/navigation';

export default function Confess() {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        message: ''
    });
    const router = useRouter();

    const handleChange = (e: any) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // todo: Handle form submission logic here
        try {
            const response = await fetch('http://localhost:5000/api/v1/confession/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                console.error('Form submission failed');
            }
            router.push("/thankyou")
        } catch (error) {
            console.error('Error submitting form', error);
        }
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