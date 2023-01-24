import classes from "../styles/Contact.module.scss";

const Contact = () => {
	return <div className={classes.container}>
        <div className={classes.left}>
            <h1>Get in touch with us</h1>
        </div>
        <div className={classes.middle}>
            <input type="email" placeholder="Enter your email..." />
            <button type="submit"> join us</button>
        </div>
        <div className={classes.right}>
            <div className={classes.icons}>
                <img src="/images/twitter.png" alt="twitter icon" />
                <img src="/images/instagram.png" alt="instagram icon" />
                <img src="/images/linkedin.png" alt="linkedin icon" />
                <img src="/images/youtube.png" alt="youtube icon" />
                <img src="/images/facebook.png" alt=" facebook icon" />

            </div>
        </div>
    </div>;
};

export default Contact;
