import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase'; // Adjust the path to your firebase.js file
import { addDoc, collection, doc, getDoc, getDocs, query, orderBy} from "firebase/firestore";
import {userObject} from '../components/Navbar'
import "../page-styles/Forum.css";
import default_pfp from '../images/default_pfp.png'

function Forum() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [reply, setReply] = useState([]);
  const [newReply, setNewReply] = useState('');

  useEffect(() => {
    // Fetch comments from Firestore
    const fetchComments = async () => {
        try {
            const querySnapshot = await getDocs(
                query(collection(firestore, "comments"), orderBy("createdAt", "desc"))
              );
            
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

  useEffect(() => {
    // Fetch comments from Firestore
    const fetchReply = async () => {
        try {
            const querySnapshot = await getDocs(
                query(collection(firestore, "comments"), orderBy("createdAt"))
              );
            // console.log(querySnapshot)
            const ReplyData = []
            querySnapshot.forEach((doc) => {
                ReplyData.push(doc.data());
                console.log(doc.data())
            });
            setReply(ReplyData)
        } catch (error) {
          console.error('Error fetching comments from Firestore:', error);
        }
      };
      

    fetchReply();
  }, [newReply]);

  const handleAddComment = async () => {
    var username 
    var user_pfp
    if (! userObject.name){
        username = "Guest User"
        user_pfp = default_pfp
    }
    else{
        username =  userObject.name
        user_pfp =  userObject.picture
    }

    try {
        if (newComment){
            const commentsRef = collection(firestore, "comments")
            // console.log(commentsRef)
            await addDoc(commentsRef, {
                text: newComment,
                createdAt: new Date(),
                parentID: "",
                username: username,
                pfp: user_pfp,
            });
        }
        setNewComment('');
        } catch (error) {
        console.error('Error adding comment to Firestore:', error);
        }
  };

  const replyComment = async (event) => {
    var buttonId = event.target.id
    var element = document.getElementById(buttonId)
    var hidden = element.getAttribute("hidden")
    
    if (hidden || hidden === ""){
        document.getElementById(buttonId).removeAttribute("hidden");
    }
    else{
        element.setAttribute("hidden", "hidden")
        var username 
        var user_pfp
        if (! userObject.name){
            username = "Guest User"
            user_pfp = default_pfp
        }
        else{
            username =  userObject.name
            user_pfp =  userObject.picture
        }
    
        try {
            if (newReply){
                const ReplyRef = collection(firestore, "comments")
                // console.log(commentsRef)
                await addDoc(ReplyRef, {
                    text: newReply,
                    createdAt: new Date(),
                    parentID: buttonId,
                    username: username,
                    pfp: user_pfp,
                });
                setNewReply('');
            }

            } catch (error) {
            console.error('Error adding comment to Firestore:', error);
            }
    }
  };
  
  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);

    // Options for formatting the date
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };

    return date.toLocaleDateString('en-US', options);
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
          maxLength={512}
        />
        <button onClick={handleAddComment} className='comment-button' id="AddComment">Add Comment</button>
      </div>
      <div>
        {comments.map((comment) => (
            <div key={comment.id}>
                {! comment.parentID &&
                    <div className='comments'>
                        <div className='user-info'>
                            <img src={comment.pfp} className="pfp"></img>
                            <p className='username'>{comment.username} &emsp;<span className='date-posted'>{formatDate(comment.createdAt)}</span></p>
                        </div>
                        <p className='comment-box'>{comment.text}</p>
                        <div className='reply-box'>
                            <textarea className='reply-input-box'
                                id={comment.createdAt} 
                                rows="4"
                                cols="50"
                                placeholder="Add your Reply"
                                hidden="hidden"
                                value={newReply}
                                onChange={(e) => setNewReply(e.target.value)}
                                maxLength={512}
                            />
                            <button onClick={replyComment} id={comment.createdAt} className='reply-button'>Reply</button>
                        </div>
                    </div>
                }

                {reply.map((reply) => (
                    <div key={reply.id}>
                        {reply.parentID == comment.createdAt &&
                            <div className='replies'>
                                <div className='user-info'>
                                    <img src={reply.pfp} className="pfp"></img>
                                    <p className='username'>{comment.username} &emsp;<span className='date-posted'>{formatDate(comment.createdAt)}</span></p>
                                </div>
                                <p className='comment-box'>{reply.text}</p>
                            </div>
                        }
                    </div>
                ))}
                


            </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
