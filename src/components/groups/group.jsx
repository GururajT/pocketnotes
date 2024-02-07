import React, { useState } from 'react'
import styles from './group.module.css'
import { firstLetter } from '../colors/color'

const GroupName=(props)=>{
    const [selectedGroupId, setSelectedGroupId] = useState(null);
  const handleGroupClick = (groupId) => {
    props.getNotes(groupId)
    setSelectedGroupId(groupId)
  }
  return (
    <>
      <div className={styles.main}>
        <h1>Pocket Notes</h1>
        {props.groups && props.groups.map((group) => (
          
            <div style={{ cursor: "pointer" }} onClick={() => handleGroupClick(group.id)} key={group.id} className={`${styles.groupnote} ${
              selectedGroupId === group.id ? styles.selectedgroup : ''
            }`}>
              <p style={{ backgroundColor: `${group.color}`}}>{firstLetter(group.text)}</p><p>{group.text}</p>
            </div>
         
        ))}

        <button onClick={() => { props.setModal((previousState) => !previousState) }}>+</button>
      </div>
    </>
  )
}
export default GroupName;