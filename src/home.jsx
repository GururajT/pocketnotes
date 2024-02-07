import React, { useState, useEffect, useRef } from 'react'
import styles from './Home.module.css'
import Creategroup from './components/creategroup/creategroup';
import GroupName from './components/groups/group';
import NotesGroup from './components/notes/notegroup';
import Homepage from './components/homepage/homepage';

export const Home=()=>{
    let [groups, setGroups] = useState(() => JSON.parse(localStorage.getItem("createdGroups")))
    let [groupId, setGroupId] = useState()
    let [home, setHome] = useState(true)
    let [isMobileView, setIsMobileView] = useState(false)
    let [displayNotes, setDisplayNotes] = useState(false)
    let [back,setBack] = useState(false)
    let [ Modal, setModal ] = useState();

    const updateGroups = (newGroup) => {
        setGroups(newGroup)
      }
      const getNotes = (id) => {
        setGroupId(id)
        setHome(false)
        setDisplayNotes(true)
        setBack(false)
      }
      const checkIsMobileView = () => {
        if (window.innerWidth <= 768) {
          setIsMobileView(true);
        } else {
          setIsMobileView(false);
        }
      }
      const goBack = ()=>{
        setBack(true)
        setDisplayNotes(false)
      }
      useEffect(() => {
        localStorage.setItem("createdGroups", JSON.stringify(groups));
      }, [groups]);
    
      useEffect(() => {
        checkIsMobileView();
        window.addEventListener('resize', checkIsMobileView);
        return () => {
          window.removeEventListener('resize', checkIsMobileView);
        };
      }, [])
    
  
    return(
        <>
        <div className={styles.main}>
        <div className={styles.left}>
            {!isMobileView && <GroupName setModal={setModal} groups={groups} getNotes={getNotes} />}
            {(!displayNotes && isMobileView) && <GroupName setModal={setModal} groups={groups} getNotes={getNotes} />}
            {(Modal && isMobileView) && <Creategroup updateGroups={updateGroups} />}
            {(displayNotes && isMobileView) && <NotesGroup groupId={groupId} goBack={goBack}/>}
        </div>
        <div className={styles.right}>
            {!isMobileView && (home ? <Homepage /> : <NotesGroup groupId={groupId} />)}
            {Modal && !isMobileView && <Creategroup updateGroups={updateGroups} />}
        </div>
        </div>
        </>
    )
}
export default Home;