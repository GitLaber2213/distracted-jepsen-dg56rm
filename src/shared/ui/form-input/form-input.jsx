import React from "react";
import classes from './form-input.module.css'


export const FormInput = ({ placeholder, img, imgHeight, imgWidth }) => {
    return (
        <div className={classes.loginUnContainer}>
            <img src={img} height={imgHeight} width={imgWidth} />
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default FormInput