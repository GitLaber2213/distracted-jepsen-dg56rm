import React from "react";
import classes from './side-bar.module.css'
import { CreateGroup, Profile } from "../../../features";
import { useModalWindowState } from "../../../shared";
import { SideBarHeader } from "./side-bar-header/side-bar-header";
import { SideBarContent } from "./side-bar-content/side-bar-content";

export const SideBar = ({ isActiveSideBar, setActiveSidebar }) => {
    const { activeWindow, openWindow, closeWindow } = useModalWindowState()
    return (
        <>
            <div className={isActiveSideBar ? classes.siteBarContainer + ' ' + classes.active : classes.siteBarContainer} onClick={() => setActiveSidebar(false)}>
                <div className={classes.siteBarContent}>
                    <SideBarHeader />
                    <SideBarContent openWindow={openWindow}/>
                </div>
            </div>
            
            <Profile activeWindow={activeWindow} closeWindowHandler={closeWindow}/>
            <CreateGroup activeWindow={activeWindow} closeWindowHandler={closeWindow}/>
        </>
    )
}

export default SideBar