import React, { useState } from "react";
import SideBar from "../../../widgets/ui/side-bar/side-bar";
import UsersAndGroupsList from "../../../widgets/ui/users-and-groups/users-and-groups-list";
import MessagesRoom from "../../../widgets/ui/messages-room/messages-room";
import classes from './chats-page.module.css'

export const ChatsPage = () => {
  const [isActiveSideBar, setActiveSidebar] = useState(false)
  
  return (
        <div className={classes.container}>
            <SideBar isActiveSideBar={isActiveSideBar} setActiveSidebar={setActiveSidebar} />
            <UsersAndGroupsList setActiveSidebar={setActiveSidebar} />
            <MessagesRoom />
        </div>
    )
}