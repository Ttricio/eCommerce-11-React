import React, {useState} from "react";
import classes from "../styles/Slider.module.scss";
import { LeftArrow, RightArrow } from "../helpers/Icons";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
	const data = [
		"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		" https://images.unsplash.com/photo-1599732494971-a6110ea1ad20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		" https://images.unsplash.com/photo-1513387785954-4e2600cd1f0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	];

    const prevSlide = ()=>{
        setCurrentSlide(currentSlide === 0 ? 2 : prev=> prev - 1)

    }
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1)
    }

	return <div className={classes.container}>
        <div className={classes.wrapper} style={{transform:`translateX(-${currentSlide * 100}vw)`}} >
            <img src={data[0]} alt="model" />
            <img src={data[1]} alt="model" />
            <img src={data[2]} alt="model" />
            </div>
            <div className={classes.icons}>
                <div onClick={prevSlide}>

                <LeftArrow/>
                </div>
                <div onClick={nextSlide}>

                <RightArrow/>
                </div>
                

            </div>
        
    </div>;
};

export default Slider;
