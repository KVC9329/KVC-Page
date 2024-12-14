"use client"

import { useState } from "react";
import { login } from "../../../api";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const data = await login(username, password);
        if (data.access) {
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh); 
            alert("Login successful");
        } else {
            alert("Login failed");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
