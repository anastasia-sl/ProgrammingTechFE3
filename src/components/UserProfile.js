import React from "react";

const UserProfile = () => {
    const userData = {
        username: "example_user",
        full_name: "Example User",
        posts: 10,
    };

    return (
        <div className="container">
            <h2>User Profile</h2>
            <div className="profile-card">
                <p>
                    <strong>Username:</strong> {userData.username}
                </p>
                <p>
                    <strong>Full Name:</strong> {userData.full_name || "Not provided"}
                </p>
                <p>
                    <strong>Number of Posts:</strong> {userData.posts}
                </p>
            </div>
        </div>
    );
};

export default UserProfile;
