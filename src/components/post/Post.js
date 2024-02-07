import React from 'react'
import styles from './Post.module.css'
import { RxAvatar } from "react-icons/rx";
import { BiSolidLike, BiLike } from "react-icons/bi";
import { FaComment, FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import PostBtn from './PostBtn';

function Post({ postName }) {
    return (
        <div className={styles.post}>
            <div className={styles.postUpper}>
                <div className={styles.postimg}>
                    <RxAvatar size="35" />
                </div>
                <div className={styles.autherName}>
                    <h4>Salman Ahmad</h4>
                    <p>salmaann.dev@gmail.com</p>
                </div>
            </div>
            <div className={styles.postLower}>
                <div className={styles.postContent}>
                    <p>{postName}</p>
                </div>
            </div>
            <div className={styles.postLikes}>
                <div className={styles.likes}>
                    <div className={styles.likesCount}>
                        <BiSolidLike color='navyblue' />
                        <FaHeart color='red' />
                        <p>165</p>
                    </div>
                    <div className={styles.commentShare}>
                        <p>1</p>
                        <FaComment color='gray' />
                        <p>45</p>
                        <IoIosShareAlt color='gray' />
                    </div>
                </div>
                <hr />
                <div className={styles.likeBtn}>
                    <PostBtn Icon={BiLike} size="20" title="Like" />
                    <PostBtn Icon={FaRegComment}  size="20" title="Comment"  />
                    <PostBtn Icon={PiShareFatLight} size="20" title="Share" />
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Post
