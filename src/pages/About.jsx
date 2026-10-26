import { useMemo } from "react";


export default function About() {

    const message = useMemo(() => {
        return "We are L5 SWD Students";
    }, []);

    return (
        <div>
            <h1>Christian</h1>
            <p>{message}</p>
        </div>
    )
}