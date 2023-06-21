import ConfessionCard from "@/components/ConfessionCard/ConfessionCard";
import styles from './confessions.module.css';
import Link from "next/link";

interface Confession {
    id: string;
    from: string;
    to: string;
    message: string;
    created_at: string;
    updated_at: string;
}

export default async function Confessions() {
    const fetchConfessions = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/confession/getall');
            const confessions: Confession[] = await response.json();
            return confessions
        } catch (error) {
            console.error('Error fetching confessions:', error);
        }
    };

    const confessions: Confession[] = await fetchConfessions() || [];

    const renderConfessions = () => {
        return confessions.map((confession) => (
            <div className={styles.confession} key={confession.id}>
                <Link href={"/confession/" + confession.id}>
                    <ConfessionCard to={confession.to} from={confession.from} message={confession.message} />
                </Link>
            </div>
        ));
    };

    return (
        <div className={styles.confession_list}>
            <div className={styles.title}>Some of the Confessions:</div>
            <div className={styles.confession_grid}>{renderConfessions()}</div>
        </div>

    );
}