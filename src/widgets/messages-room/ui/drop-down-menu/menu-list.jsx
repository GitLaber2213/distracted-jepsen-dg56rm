import React from "react";
import classes from './menu-list.module.css'
import MenuItem from "./menu-item";

import viewProfilePhoto from '../../../../shared/assets/userName.png'
import starPhoto from '../../../../shared/assets/star.png'
import deletePhoto from '../../../../shared/assets/delete.png'
import { Constants } from "../../../../shared";


export const MenuList = ({ openWindow }) => {
    return (
        <div className={classes.menuList}>
            <MenuItem handleClick={() => openWindow(Constants.PROFILE_WINDOW)} image={viewProfilePhoto} text={"View profile"} imgHeight={25} imgWidth={25} />
            <MenuItem handleClick={null} image={starPhoto} text={"Add in favorite"} imgHeight={25} imgWidth={25} />
            <MenuItem handleClick={null} image={deletePhoto} text={"Delete chat"} imgHeight={25} imgWidth={25} />
        </div>
    )
}

export default MenuList