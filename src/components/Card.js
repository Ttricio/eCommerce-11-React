import React from 'react';
import { Link } from 'react-router-dom';
import classes from "../styles/Card.module.scss"


const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
    <div className={classes.container}>
        <div className={classes.image}>
            {item.isNew && <span>New Season</span>}
            <img src={item.img} alt="" className={classes.main}/>
            <img src={item.img2} alt="" className={classes.secondary}/>
        </div>
        <h2>{item.title}</h2>
        <div className={classes.prices}>
            <span>${item.oldPrice}</span>
            <span>${item.newPrice}</span>
        </div>
    </div>
    </Link>
  )
}

export default Card