import React from "react"
import classes from './search-input.module.css'

export const SearchInput = ({placeholder}) => {
    return <input className={classes.searchInput} type="text" placeholder={placeholder} />
}

export default SearchInput