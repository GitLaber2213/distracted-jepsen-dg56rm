import React from "react";
import classes from './side-bar-header.module.css'
import userPhoto from '../../../../shared/assets/user.png'
import { ItemInList } from "../../../../shared";


export const SideBarHeader = () => {
    return (
        <div className={classes.sideBarHeader} onClick={e => e.stopPropagation()}>
            <ItemInList image={userPhoto} imgHeight={50} imgWidth={50} text={"UserName"} />
        </div>
    )
}


export default SideBarHeader