interface Props {
    to: string
    from: string
    message: string
}

export default function ConfessionCard({ to, from, message }: Props) {
    return (
        <>
            To: {to}
            From: {from}
            Message: {message}
        </>
    )
}
