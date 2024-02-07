import React from 'react'
import styles from './PostForm.module.css'

function PostFormBtn({Icon, color, size, title}) {
  return (
    <div className={styles.postFormBtn}>
      {Icon && <Icon color={color} size={size} />}
      <p>{title}</p>
    </div>
  )
}

export default PostFormBtn
