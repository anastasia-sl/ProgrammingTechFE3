import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        full_name: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration data:", formData);
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
