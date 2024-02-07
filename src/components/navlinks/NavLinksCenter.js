import React from 'react'
import styles from './NavLinks.module.css'

function NavLinksCenter({Icon, color, size, cursor}) {
    return (
        <div className={styles.navLinksCenter}>
            {Icon && <Icon color={color} size={size} cursor={cursor} />}
        </div>
    )
}

export default NavLinksCenter
