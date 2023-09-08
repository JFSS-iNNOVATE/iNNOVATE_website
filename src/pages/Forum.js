import React from "react";
import '../page-styles/Forum.css'

const Forum = () => {
    return(
        <div className="main-container">
            <h1 className="text">Welcome to the forum! Here you can ask questions, share your ideas, or simply just chat!</h1>
            <div className="comment-box">
                <textarea className="input-box"/>
                <button className="comment-button">Comment</button>
            </div>
        </div>
    )
}

export default Forum;