import React from "react";

const PostsList = () => {
    const posts = [
        { id: 1, content: "First post content", likes: 10 },
        { id: 2, content: "Second post content", likes: 5 },
    ];

    return (
        <div className="container">
            <h2>Posts</h2>
            <ul className="posts-list">
                {posts.map((post) => (
                    <li key={post.id} className="post-item">
                        <p>{post.content}</p>
                        <p>
                            <strong>Likes:</strong> {post.likes}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
