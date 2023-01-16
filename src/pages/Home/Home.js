import React from "react";
import Slider from "../../components/Slider";
import classes from "../../styles/Home.module.scss";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";

const Home = () => {
	return (
		<div className={classes.conteiner}>
			<Slider type="featured" />
			<FeaturedProducts type="tranding"/>
			<Categories/>
			<FeaturedProducts type=" featured"/>
		</div>
	);
};

export default Home;
