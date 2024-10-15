import React from "react";
import classes from './messages-room.module.css'
import DropDownMenu from "./drop-down-menu/drop-down-menu";
import ChatInfoBar from "./chat-info-bar/chat-info-bar";
import { useModalWindowState } from "../../../shared";
import { Profile } from "../../../features";
import Message from "./message/message";
import MessageSender from "./message-sender/message-sender";


export const MessagesRoom = () => {
    const { activeWindow, openWindow, closeWindow } = useModalWindowState()

    return (
        <>
            <div className={classes.messagesRoomContainer}>
                <ChatInfoBar openWindow={openWindow} />
                <Message message={"vevraas"} timeStamp={"10:10"} myMessage={true}/>
                <MessageSender />
            </div>

            <DropDownMenu activeWindow={activeWindow} closeWindow={closeWindow} openWindow={openWindow} />
            <Profile activeWindow={activeWindow} closeWindowHandler={closeWindow} />
        </>
    )
}
export default MessagesRoom