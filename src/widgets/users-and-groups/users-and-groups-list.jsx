import React, { useState } from "react"
import classes from './users-and-groups-list.module.css'
import { ResizableElement, ScrollBar } from "../../../shared"
import UsersAndGroupsHeader from "./users-and-groups-header/users-and-groups-header"
import UsersAndGroupsContent from "./users-and-groups-content/users-and-groups-content"


export const UsersAndGroupsList = ({ setActiveSidebar }) => {
    const [width, setWidth] = useState(400)

    return (
        <div className={classes.chatsContainer} style={{ width: `${width}px` }}>
            <ResizableElement setWidth={setWidth} width={width} />
            <ScrollBar>
                <UsersAndGroupsHeader setActiveSidebar={setActiveSidebar} />
                <UsersAndGroupsContent />
            </ScrollBar>
        </div>
    )
}


export default UsersAndGroupsList