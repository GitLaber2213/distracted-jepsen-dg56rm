import React from "react"
import classes from './item-in-list.module.css'

export const ItemInList = ({ handleClick, image, text, imgHeight, imgWidth }) => {
    return (
        <div onClick={handleClick} className={classes.container}>
            <img src={image} height={imgWidth} width={imgHeight} />
            <div>{text}</div>
        </div>
    )
}



export default ItemInList