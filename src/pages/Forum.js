import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase'; // Adjust the path to your firebase.js file
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import {userObject} from '../components/Navbar'
import "../page-styles/Forum.css";

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
    if (! userObject.name){
        function handleCallback(response) {
            userObject = jwt_decode(response.credential)
            console.log(userObject);
            setUser(userObject);
            document.getElementById("LoginDiv").hidden = true;
        }

        /* global google */
        google.accounts.id.initialize({
            client_id: "680968852601-6h8k53sd636mg9hfu2eqmvs8vjtg8skj.apps.googleusercontent.com",
            callback: handleCallback
        });

        google.accounts.id.renderButton(
            document.getElementById("LoginDiv"), 
            {theme: "outline", size: "large"}
        );

        useGoogleLogin()
    }
    else{
        try {
            const commentsRef = collection(firestore, "comments")
            console.log(commentsRef)
            await addDoc(commentsRef, {
              text: newComment,
              createdAt: new Date(),
              parentID: "",
              username: userObject.name,
              pfp: userObject.picture,
            });
            setNewComment('');
          } catch (error) {
            console.error('Error adding comment to Firestore:', error);
          }
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
        <button onClick={handleAddComment} className='comment-button'>Add Comment</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p className='comment-box'>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
