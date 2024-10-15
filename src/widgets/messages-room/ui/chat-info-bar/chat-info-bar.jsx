import React from "react";
import classes from './message-room-header.module.css'
import dropDownMenuPhoto from '../../../../shared/assets/dropDownMenu.png'
import { Constants, ItemInList } from "../../../../shared";


const ChatInfoBar = ({ menuActive, openWindow}) => {
    return (
        <div className={classes.messagesRoomHeader}>
            <div className={classes.profileInfo}>
                <ItemInList handleClick={() => openWindow(Constants.PROFILE_WINDOW)} image={null} text={"name"} imgHeight={40} imgWidth={40}/>
            </div>
            <div className={menuActive ? classes.openMenuBtn + ' ' + classes.active : classes.openMenuBtn}>
                <ItemInList handleClick={() => openWindow(Constants.DROPDOWN_MENU_WINDOW)} image={dropDownMenuPhoto} imgHeight={20} imgWidth={20}/>
            </div>
        </div>
    )
}

export default ChatInfoBar