import React from "react";
import classes from './chat.module.css'
import { ItemInList } from "../../../shared";


export const Chat = ({ image, text }) => {
    return (
        <div>
            <ItemInList image={image} imgHeight={50} imgWidth={50} text={text} />
        </div>
    )
}

export default Chat