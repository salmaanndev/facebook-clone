import React from 'react'
import styles from './Story.module.css'
import { FaPlus } from "react-icons/fa";

function Story({title}) {
  return (
    <div className={styles.backimg}>
        <div className={styles.createBtn}>
            <FaPlus color="blue" />
        </div>
        <div className={styles.storytxt}>
            <h4>Create Story</h4>
            <p>Share a photo or write something</p>
        </div>
    </div>
  )
}

export default Story
