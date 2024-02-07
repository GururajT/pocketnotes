import React from 'react'
import style from'./homepage.module.css'
import image from '../../images/home.png'

function Homepage(){
    return(
        <>
          <div className={style.notes}>
            <img src={image}></img>
            <p className={style.pocket}>Pocket Notes</p>
            <p className={style.message}>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <p className={style.encrypt}><i className="fa-solid fa-lock"></i>end-to-end encrypted</p>
            </div>
        </>
    )    
}
export default Homepage;
