import React from "react";
import classes from "../../styles/Navbar.module.scss";
import { Search, DownArrow, User, Heart, Cart } from "../../helpers/Icons";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.left}>
					<div className={classes.item}>
						<img src='/images/en.png' alt='american/english flag' />
						<DownArrow />
					</div>
					<div className={classes.item}>
						<span>USD</span>
						<DownArrow />
					</div>
					<div className={classes.item}>
						<Link to='/products/1'>Women</Link>
					</div>
					<div className={classes.item}>
						<Link to='/products/2'>Men</Link>
					</div>
					<div className={classes.item}>
						<Link to='/products/3'>Children</Link>
					</div>
				</div>
				<div className={classes.center}>
					<Link to='/'>BestClothes</Link>
				</div>
				<div className={classes.right}>
					<div className={classes.item}>
						<Link to='/'>HomePage</Link>
					</div>
					<div className={classes.item}>
						<Link to='/'>About</Link>
					</div>
					<div className={classes.item}>
						<Link to='/'>Stores</Link>
					</div>
					<div className={classes.icons}>
						<Search />
						<User />
						<Heart />
						<div className={classes.cartIcon}>
							<Cart />
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
