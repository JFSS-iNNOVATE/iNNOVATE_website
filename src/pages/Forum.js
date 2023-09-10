import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase'; // Adjust the path to your firebase.js file
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import {userObject} from '../components/Navbar'
import "../page-styles/Forum.css";

function Forum() {
    console.log("hi")
    console.log(userObject)
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
                commentsData.push(doc.data());
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
    var username 
    var user_pfp
    if (! userObject.name){
        username = "Guest User"
        user_pfp = ""
    }
    else{
        username =  userObject.name
        user_pfp =  userObject.picture
    }

    try {
        const commentsRef = collection(firestore, "comments")
        console.log(commentsRef)
        await addDoc(commentsRef, {
            text: newComment,
            createdAt: new Date(),
            parentID: "",
            username: username,
            pfp: user_pfp,
        });
        setNewComment('');
        } catch (error) {
        console.error('Error adding comment to Firestore:', error);
        }
    
  };

  const replyComment = async (id) => {
    var username 
    var user_pfp
    if (! userObject.name){
        username = "Guest User"
        user_pfp = ""
    }
    else{
        username =  userObject.name
        user_pfp =  userObject.picture
    }

    try {
        const commentsRef = collection(firestore, "comments")
        console.log(commentsRef)
        await addDoc(commentsRef, {
            text: newComment,
            createdAt: new Date(),
            parentID: "",
            username: username,
            pfp: user_pfp,
        });
        setNewComment('');
        } catch (error) {
        console.error('Error adding comment to Firestore:', error);
        }
    
  };
  

  return (
    <div className='main-container'>
      <h1>Forum</h1>
      <div>
        <textarea className='input-box'
          rows="4"
          cols="50"
          placeholder="Add your comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment} className='comment-button' id="AddComment">Add Comment</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className='comment'>
            <div className='user-info'>
                <img src={comment.pfp} className="pfp"></img>
                <p className='username'>{comment.username}</p>
            </div>
            <p className='comment-box'>{comment.text}</p>
            <button onClick={replyComment(comment.id)} className='reply-button'>Reply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
