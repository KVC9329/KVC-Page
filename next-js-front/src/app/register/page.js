"use client"

import { useState } from "react";
import { register } from "../../../api";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const data = await register(username, password);
        if (data.access) {
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh); 
            alert("Registration successful");
        } else {
            alert("Registration failed");
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="checkbox"
                placeholder="acknowledgement"
                required
            />
            <button onClick={handleLogin}>Register</button>
        </div>
    );
}
