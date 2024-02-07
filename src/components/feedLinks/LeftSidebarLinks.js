import React from 'react'
import styles from './LeftSidebarLinks.module.css'

function LeftSidebarLinks({Icon, title, size, color}) {
  return (
    <div className={styles.LeftSidebarLinks}>
      {Icon && <Icon size={size} color={color} />}
      <p>{title}</p>
    </div>
  )
}

export default LeftSidebarLinks
