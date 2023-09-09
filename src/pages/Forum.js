import React, { useState, useEffect } from 'react';
import '../page-styles/Forum.css';

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('CommentsDatabase', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains('comments')) {
        db.createObjectStore('comments', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commentName, setCommentName] = useState('Your Name'); // Default username

  useEffect(() => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction('comments', 'readonly');
        const objectStore = transaction.objectStore('comments');

        const request = objectStore.getAll();

        request.onsuccess = () => {
          setComments(request.result);
        };

        request.onerror = (event) => {
          console.error('Error fetching comments:', event.target.error);
        };
      })
      .catch((error) => {
        console.error('Error opening database:', error);
      });
  }, []);

  const saveComment = (comment) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction('comments', 'readwrite');
        const objectStore = transaction.objectStore('comments');

        const request = objectStore.add(comment);

        request.onsuccess = () => {
          setComments([...comments, comment]);
        };

        request.onerror = (event) => {
          console.error('Error adding comment:', event.target.error);
        };
      })
      .catch((error) => {
        console.error('Error opening database:', error);
      });
  };

  const handleAddComment = () => {
    const newComment = {
      username: commentName,
      date: new Date().toLocaleString(),
      comment: commentText,
    };

    saveComment(newComment);
    setCommentText('');
  };

  return (
    <div className="main-container">
      <h1 className="text">
        Welcome to the forum! Here you can ask questions, share your ideas, or simply just chat!
      </h1>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={commentName}
          onChange={(e) => setCommentName(e.target.value)}
        />
        <textarea
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button className="comment-button" onClick={handleAddComment}>
          Comment
        </button>
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment-info">
                <span className="comment-username">{comment.username}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <div className="comment-text">{comment.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
