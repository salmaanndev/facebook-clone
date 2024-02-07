import React from 'react'
import styles from './ContactList.module.css'
import { RxAvatar } from "react-icons/rx";

function ContactList({name, size}) {
  return (
    <div className={styles.contactList}>
        <RxAvatar size={size} />
        <p>{name}</p>
    </div>
  )
}

export default ContactList
