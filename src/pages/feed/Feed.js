import React from 'react'
import styles from './Feed.module.css'
import Header from '../../components/header/Header'
import { RxAvatar } from "react-icons/rx";
import { IoPeople, IoHeartCircleOutline, IoStatsChartOutline } from "react-icons/io5";
import { SiBuzzfeed } from "react-icons/si";
import { FaDroplet } from "react-icons/fa6";
import { MdGroups2, MdGames, MdOutlineRecentActors, MdOutlineSaveAlt, MdOutlinePayment, MdEventRepeat, MdOutlineDashboard } from "react-icons/md";
import { PiHouseDuotone, PiVideoBold } from "react-icons/pi";
import { BsClockHistory, BsThreeDots, BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { LuTreePine } from "react-icons/lu";
import { SiFacebookgaming } from "react-icons/si";
import { FaFontAwesomeFlag, FaFacebookMessenger } from "react-icons/fa";
import Story from '../../components/story/Story';
import { FaSearch } from 'react-icons/fa'
import LeftSidebarLinks from '../../components/feedLinks/LeftSidebarLinks';
import ContactList from '../../components/contactList/ContactList';


function Feed({ dispatch, status, title, children }) {
  return (
    <>
      <Header />
      <div className={styles.feed}>
        <div className={styles.feedLeft}>
          <div className={styles.leftFeedLinks}>

            {status === 'moreitems' ?
              (
                <>
                  <LeftSidebarLinks Icon={RxAvatar} color="#1e81b0" title="Salman Ahmad" size="25" />
                  <LeftSidebarLinks Icon={IoPeople} color="#1e81b0" title="Friends" size="25" />
                  <LeftSidebarLinks Icon={SiBuzzfeed} color="#1e81b0" title="Feeds" size="25" />
                  <LeftSidebarLinks Icon={MdGroups2} color="#1e81b0" title="Groups" size="25" />
                  <LeftSidebarLinks Icon={PiHouseDuotone} color="#1e81b0" title="Marketplace" size="25" />
                  <LeftSidebarLinks Icon={PiVideoBold} color="#1e81b0" title="Video" size="25" />
                  <LeftSidebarLinks Icon={BsClockHistory} color="#1e81b0" title="Memories" size="25" />
                  <LeftSidebarLinks Icon={MdOutlineSaveAlt} color="purple" title="Saved" size="25" />
                  <LeftSidebarLinks Icon={MdOutlineDashboard} color="blue" title="Professional Dashboard" size="25" />
                  <LeftSidebarLinks Icon={BsFileEarmarkSpreadsheet} color="#1e81b0" title="Ad Centre" size="25" />
                  <LeftSidebarLinks Icon={IoStatsChartOutline} color="#1e81b0" title="Ads Manager" size="25" />
                  <LeftSidebarLinks Icon={FaDroplet} color="red" title="Blood Donations" size="25" />
                  <LeftSidebarLinks Icon={LuTreePine} color="#1e81b0" title="Climate Science Centre" size="25" />
                  <LeftSidebarLinks Icon={MdEventRepeat} color="#1e81b0" title="Events" size="25" />
                  <LeftSidebarLinks Icon={IoHeartCircleOutline} color="#1e81b0" title="Fundraises" size="25" />
                  <LeftSidebarLinks Icon={SiFacebookgaming} color="#1e81b0" title="Gaming Video" size="25" />
                  <LeftSidebarLinks Icon={FaFacebookMessenger} color="purple" title="Messenger" size="25" />
                  <LeftSidebarLinks Icon={FaFacebookMessenger} color="#1e81b0" title="Messenger Kids" size="25" />
                  <LeftSidebarLinks Icon={MdOutlinePayment} color="#1e81b0" title="Orders and Payments" size="25" />
                  <LeftSidebarLinks Icon={FaFontAwesomeFlag} color="#1e81b0" title="Pages" size="25" />
                  <LeftSidebarLinks Icon={MdGames} color="#1e81b0" title="Play Games" size="25" />
                  <LeftSidebarLinks Icon={MdOutlineRecentActors} color="#1e81b0" title="Recent ad activity" size="25" />
                </>
              ) : (
                <>
                  <LeftSidebarLinks Icon={RxAvatar} color="#1e81b0" title="Salman Ahmad" size="25" />
                  <LeftSidebarLinks Icon={IoPeople} color="#1e81b0" title="Friends" size="25" />
                  <LeftSidebarLinks Icon={SiBuzzfeed} color="#1e81b0" title="Feeds" size="25" />
                  <LeftSidebarLinks Icon={MdGroups2} color="#1e81b0" title="Groups" size="25" />
                  <LeftSidebarLinks Icon={PiHouseDuotone} color="#1e81b0" title="Marketplace" size="25" />
                  <LeftSidebarLinks Icon={PiVideoBold} color="#1e81b0" title="Video" size="25" />
                  <LeftSidebarLinks Icon={BsClockHistory} color="#1e81b0" title="Memories" size="25" />
                  <LeftSidebarLinks Icon={MdOutlineSaveAlt} color="purple" title="Saved" size="25" />
                  <LeftSidebarLinks Icon={MdOutlineDashboard} color="blue" title="Professional Dashboard" size="25" />
                </>
              )
            }
          </div>
          <button onClick={title === 'See More' ? () => dispatch({ type: 'more' }) : () => dispatch({ type: 'less' })}> {title}</button>
          <hr />
          <div className={styles.shortcuts}>
            <h4>Your Shortcuts</h4>
          </div>
        </div>
        <div className={styles.feedCenter}>
          <div className={styles.stories}>
            <Story />
          </div>
          <div className={styles.postSection}>
            <div className={styles.createPost}>

              {children}

            </div>
          </div>
        </div>
        <div className={styles.feedRight}>
          <div className={styles.friendReq}>
            <h4>Friend Requests</h4>
            <p>See All</p>
          </div>
          <hr />
          <div className={styles.contacts}>
            <h4>Contacts</h4>

            <div className={styles.contactIcons}>
              <FaSearch />
              <BsThreeDots />
            </div>
          </div>
          <div className={styles.contactsList}>
            <ContactList name="Qasim Ishaq" size="30" />
            <ContactList name="Imran Saeed" size="30" />
            <ContactList name="Irfan Saeed" size="30" />
            <ContactList name="Asif Saeed" size="30" />
            <ContactList name="Muhammad yaseen" size="30" />
            <ContactList name="Babar Jutt" size="30" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed
