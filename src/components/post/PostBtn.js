import React from 'react'
import styles from './Post.module.css'

function PostBtn({Icon, title, size}) {
  return (
    <div className={styles.postBtn}>
      {Icon && <Icon size={size}  />}
      <p>{title}</p>
    </div>
  )
}

export default PostBtn
