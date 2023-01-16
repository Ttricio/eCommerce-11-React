import React from "react";
import classes from "../../styles/Footer.module.scss";
import { Logo } from "../../helpers/Icons";

const Footer = () => {
	return (
		<div className={classes.container}>
			<div className={classes.top}>
				<div className={classes.left}>
					<div className={classes.item}>
						<h1>Categories</h1>
						<span>Women</span>
						<span>Men</span>
						<span>Shoes</span>
						<span>Accessories</span>
						<span>New Arrivals</span>
					</div>
					<div className={classes.item}>
						<h1>Links</h1>
						<span>FAQ</span>
						<span>Pages</span>
						<span>Stores</span>
						<span>Compare</span>
						<span>Cookies</span>
					</div>
				</div>
				<div className={classes.right}>
					<div className={classes.item}>
						<h2>About</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
							facilis cum consequatur et minima molestias enim quisquam, debitis
							aperiam blanditiis vitae odit libero ducimus officia assumenda est
							commodi mollitia necessitatibus!
						</span>
					</div>
					<div className={classes.item}>
						<h2>Contact</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
							facilis cum consequatur et minima molestias enim quisquam, debitis
							aperiam blanditiis vitae odit libero ducimus officia assumenda est
							commodi mollitia necessitatibus!
						</span>
					</div>
				</div>
			</div>
			<div className={classes.bottom}>
				<div className={classes.left}>
					<span className={classes.logo}>
						<Logo />
            <p>BestClothes</p>
            
					</span>
				</div>
				<div className={classes.right}>
					<img src='/images/payment.png' alt='payment method banner' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
