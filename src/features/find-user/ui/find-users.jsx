import React from "react";
import classes from './find-user.module.css'
import { SearchInput } from "../../../shared";



export const FindUsers = () => {
    return (
        <div className={classes.findUsersContainer}>
            <div className={classes.findUsersUnContainer}>
                <SearchInput />
            </div>
        </div>
    )
}


export default FindUsers
