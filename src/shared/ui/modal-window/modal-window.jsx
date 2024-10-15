import React from "react";
import classes from './ModalWindow.module.css'

export const ModalWindow = ({ activeWindow, windowType, closeWindowHandler, children, windowHeader}) => {
    return (
        <div className={activeWindow === windowType ? classes.modalWindowContainer + ' ' + classes.active : classes.modalWindowContainer} onClick={closeWindowHandler}>
            <div className={activeWindow === windowType ? classes.modalWindowUnContainer + ' ' + classes.active : classes.modalWindowUnContainer} onClick={e => e.stopPropagation()}>
                <div className={classes.windowHeadContainer}>
                    <div className={classes.windowHead}>{windowHeader}</div>
                    <div className={classes.closeWindowBtn} onClick={closeWindowHandler}></div>
                </div>
                {children}
            </div>
        </div>
    )
}


export default ModalWindow