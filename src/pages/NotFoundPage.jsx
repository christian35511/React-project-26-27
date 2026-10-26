import React from "react";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
    return (
        <div>
        <h1>404 - Page Not Found</h1>
        <p>This is page in No longer Available.</p>
        <Link to="/">Go back to Home</Link>
        </div>
    );
    }