import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>HELLO</h1>
            <p>We are L5 SWD Students</p>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>


        </div>
    );
}