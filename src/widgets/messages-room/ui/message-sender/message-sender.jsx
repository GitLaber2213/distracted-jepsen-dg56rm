import React from "react";
import classes from './message-sender.module.css'
import sendMessagePhoto from '../../../../shared/assets/send.png'

export const MessageSender = () => {
    return (
        <div className={classes.container}>
            <div className={classes.unContainer}>
                <textarea type="text" placeholder="Write a message..." />
                <img src={sendMessagePhoto} height={30} width={30} />
            </div>
        </div>
    )
}

export default MessageSender