import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List";
import classes from "../../styles/Products.module.scss"

const Products = () => {

	const catId = parseInt(useParams().id)
	const [maxPrice, setMaxPrice] = useState()
	const [sort, setSort] = useState(null)
	console.log(maxPrice);
	console.log(sort)
	
	return (
		<div className={classes.container}>
			<div className={classes.left}>
				<div className={`${classes.filter__item}`}>
					<h2>Product categories</h2>
					<div className={classes.input__item}>
						<input type='checkbox' id='1' value={1} />
						<label htmlFor='1'>Shirts</label>
					</div>
					<div className={classes.input__item}>
						<input type='checkbox' id='2' value={2} />
						<label htmlFor='2'>Skirts</label>
					</div>
					<div className={classes.input__item}>
						<input type='checkbox' id='3' value={3} />
						<label htmlFor='3'>Triusers</label>
					</div>
				</div>
				<div className={`${classes.filter__item}`}>
					<h2>Filter by price</h2>
					<div className={classes.input__item}>
						<span>0</span>
						<input type='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className={`${classes.filter__item}`}>
					<h2>Sort by</h2>
					<div className={`${classes.filter__item}  ${classes.radio}`}>
						<div>

						<input type='radio' name='price' id='asc' onChange={e=>setSort("asc")}/>
						<label htmlFor='asc'>Price (lowest first)</label>
						</div>
						<div>

						<input type='radio' name='price' id='desc' onChange={e=>setSort("desc")}/>
						<label htmlFor='desc'>Price (highest first)</label>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.right}>
				<img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="woman with shopping bags" className={classes.catImg}/>

				<List catId={catId} maxPrice={maxPrice} sort={sort}/>

			</div>
		</div>
	);
};

export default Products;
