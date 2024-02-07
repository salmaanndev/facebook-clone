import React from 'react'
import styles from './NavLinks.module.css'

function NavLinks({Icon, color, size, cursor}) {
    return (
        <div className={styles.navLinks}>
            {Icon && <Icon color={color} size={size} cursor={cursor} />}
        </div>
    )
}

export default NavLinks
