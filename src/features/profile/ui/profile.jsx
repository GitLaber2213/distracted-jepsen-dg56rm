import React from 'react'
import ModalWindow from '../../../shared/ui/modal-window/modal-window'
import ItemInList from '../../../shared/ui/item-in-list/item-in-list'
import classes from './Profile.module.css'

import userNamePhoto from '../../../shared/assets/userName.png'
import emailPhoto from '../../../shared/assets/email.png'
import phonePhoto from '../../../shared/assets/phone.png'
import webSitePhoto from '../../../shared/assets/website.png'
import { Constants } from '../../../shared'


export const Profile = ({activeWindow, closeWindowHandler }) => {
    console.log("render")
    return (
        <ModalWindow activeWindow={activeWindow} windowType={Constants.PROFILE_WINDOW} closeWindowHandler={closeWindowHandler} windowHeader={"Profile"}>
            <div className={classes.profileHeader}>
                <ItemInList image={null} text={"name"} imgHeight={75} imgWidth={75} />
            </div>
            <div className={classes.profileContent}>
                <ItemInList image={userNamePhoto} text={"userName"} imgHeight={25} imgWidth={25} />
            </div>
            <div className={classes.profileContent}>
                <ItemInList image={emailPhoto} text={"email"} imgHeight={25} imgWidth={25} />
            </div>
            <div className={classes.profileContent}>
                <ItemInList image={phonePhoto} text={"phone"} imgHeight={25} imgWidth={25} />
            </div>
            <div className={classes.profileContent}>
                <ItemInList image={webSitePhoto} text={"webSite"} imgHeight={25} imgWidth={25} />
            </div>
        </ModalWindow>
    )
}


export default Profile