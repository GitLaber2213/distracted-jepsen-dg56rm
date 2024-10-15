import React from "react";
import classes from './users-and-groups-content-list-item.module.css'
import { ItemInList } from "../../../../shared";


export const UsersAndGroupsContentListItem = ({imgHeight, imgWidth, text}) => {
    return (
        <div className={classes.usersAndGroupsContentListItem}>
            <ItemInList imgHeight={imgHeight} imgWidth={imgWidth} text={text} />
        </div>
    )
}

export default UsersAndGroupsContentListItem