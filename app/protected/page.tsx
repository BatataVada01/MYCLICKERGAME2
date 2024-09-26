"use client"; // Mark this component as a Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Updated from next/router to next/navigation

// Mock authentication function for example purposes
function isAuthenticated(): boolean {
    // Replace with your actual authentication logic (like checking cookies, tokens, etc.)
    return localStorage.getItem("authToken") !== null;
}

export default function ProtectedPage() {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push("/login"); // Redirect to login page if not authenticated
        } else {
            setIsAuth(true);
        }
    }, [router]);

    if (!isAuth) {
        return <div>Loading...</div>; // Show a loading spinner or message while redirecting
    }

    return (
        <div>
            <h1>Welcome to the Protected Page</h1>
            <p>This page is only accessible to authenticated users.</p>
            <p>Your secure content goes here.</p>
        </div>
    );
}

