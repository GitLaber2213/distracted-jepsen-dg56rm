import React from "react";
import classes from './scroll-bar.module.css'


export const ScrollBar = ({ children }) => {
    return (
        <div className={classes.scrollBar}>
            {children}
        </div>
    )
}


export default ScrollBar