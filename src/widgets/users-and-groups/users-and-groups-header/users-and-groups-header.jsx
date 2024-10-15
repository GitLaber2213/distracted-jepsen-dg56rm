import React from "react";
import classes from './users-and-groups-header.module.css'
import menuBarPhoto from '../../../../shared/assets/menuBar.png'
import { FindUsers } from "../../../../features";


export const UsersAndGroupsHeader = ({ setActiveSidebar }) => {
    return (
        <div className={classes.chatsHeader}>
            <img onClick={() => setActiveSidebar(true)} src={menuBarPhoto} height={40} width={40} />
            <FindUsers />
        </div>
    )
}

export default UsersAndGroupsHeader
