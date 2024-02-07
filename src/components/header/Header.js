import React from 'react'
import styles from './Header.module.css'
import { FaSearch, FaHome, FaFacebookMessenger } from 'react-icons/fa'
import { IoPeople } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import NavLinks from '../navlinks/NavLinks';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiNotification2Fill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import NavLinksCenter from '../navlinks/NavLinksCenter';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.headerMain}>
      <div className={styles.headerLeft}>
        <img cursor="pointer" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" />
        <div className={styles.headerInput}>
          <FaSearch color="gray" />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>
      <div className={styles.headerCenter}>
        <NavLinksCenter Icon={FaHome} color="gray" size="30" cursor="pointer" />
        <NavLinksCenter Icon={IoPeople} color="gray" size="30" cursor="pointer" />
        <NavLinksCenter Icon={HiMiniUserGroup} color="gray" size="30" cursor="pointer" />
      </div>
      <div className={styles.headerRight}>
        <p>Find Friends</p>
        <button><NavLinks Icon={BsFillGrid3X3GapFill} color="black" size="22" cursor="pointer" /></button>
        <button><NavLinks Icon={FaFacebookMessenger} color="black" size="22" cursor="pointer" /></button>
        <button><NavLinks Icon={RiNotification2Fill} color="black" size="22" cursor="pointer" /></button>
        <button><Link to="/" ><NavLinks Icon={RxAvatar} color="black" size="22" cursor="pointer" /></Link></button>
      </div>
    </div>
  )
}

export default Header
