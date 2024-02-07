import React from 'react'
import styles from './PostForm.module.css'
import { RxAvatar } from "react-icons/rx";
import PostFormBtn from './PostFormBtn';
import { FaVideo, FaPlayCircle } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import Post from '../post/Post';

function PostForm({ handlePost, posts, newPost, setNewPost }) {

    // const handleRemovePost = id => {
    //     dispatch({ type: 'removePost', id });
    // };

    return (
        <>
            <form className={styles.postForm} onSubmit={(e) => {
                e.preventDefault();
                handlePost();
                }}>
                <div className={styles.postFormUpper}>
                    <RxAvatar size="40" />
                    <input type='text' onChange={(e) => setNewPost(e.target.value)} value={newPost} placeholder="What's on your mind?" />
                    <button type='submit' style={{ display: "none" }}>Submit</button>
                </div>
                <div className={styles.postFormLower}>
                    <div className={styles.formBtns}>
                        <PostFormBtn Icon={FaVideo} size="25" color="#db1212" title="Live video" />
                        <PostFormBtn Icon={IoMdPhotos} size="25" color="lightgreen" title="Photo/video" />
                        <PostFormBtn Icon={FaPlayCircle} size="25" color="#a8326f" title="Reel" />
                    </div>

                </div>
                
            </form>
            {posts.map((post)=> {
                return <Post key={post.id} postName={post.newPost}  />
            }) }
        </>
    )
}

export default PostForm
