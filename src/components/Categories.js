import React from 'react'
import { Link } from 'react-router-dom'
import classes from "../styles/Categories.module.scss"

const Categories = () => {
  return (
    <div className={classes.container}>
        <div className={classes.column}>
            <div className={classes.row}>
                <img src="https://images.unsplash.com/photo-1530047139082-5435ca3c4614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                <button>
                    <Link to="/products/1">Sale</Link>
                </button>
            </div>
            <div className={classes.row}>r2</div>
        </div>
        <div className={classes.column}>

            <div className={classes.row}>r3</div>
        </div>
        <div className={`${classes.column} ${classes.large}`} >
            <div className={classes.row}>r4
            <div className={classes.column}></div>
            <div className={classes.column}>r5</div>
            </div>
            <div className={classes.row}>r6</div>

        </div>
    </div>
  )
}

export default Categories