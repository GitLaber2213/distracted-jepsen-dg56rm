import React from "react";
import classes from './users-and-groups-content.module.css'
import UsersAndGroupsContentList from "./users-and-groups-content-list";


export const UsersAndGroupsContent = () => {
    return (
        <div className={classes.chatsContent}>
            <UsersAndGroupsContentList />
        </div>
    )
}


export default UsersAndGroupsContent