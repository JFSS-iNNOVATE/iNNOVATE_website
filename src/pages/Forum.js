import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase'; // Adjust the path to your firebase.js file
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

function Forum() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments from Firestore
    const fetchComments = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "comments"))
            // console.log(querySnapshot)
            const commentsData = []
            querySnapshot.forEach((doc) => {
                commentsData.push(doc.data().text);
                console.log(doc.data())
            });
            setComments(commentsData)
        } catch (error) {
          console.error('Error fetching comments from Firestore:', error);
        }
      };
      

    fetchComments();
  }, [newComment]);

  const handleAddComment = async () => {
    try {
        console.log("Tried this")
      const commentsRef = collection(firestore, "comments")
      console.log(commentsRef)
      await addDoc(commentsRef, {
        text: newComment,
        createdAt: new Date(),
      });
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment to Firestore:', error);
    }
  };
  

  return (
    <div>
      <h1>Forum</h1>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Add your comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment}</p>
            {/* <small>Posted at: {comment.createdAt.toDate().toLocaleString()}</small> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
