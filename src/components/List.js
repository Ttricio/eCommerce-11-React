import classes from "../styles/List.module.scss";
import Card from "./Card";

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            img2: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            isNew: true,
            title: "Shirt",
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1605516384564-6e30d6b4f235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            isNew: true,
            title: "Hawiaii shirt",
            oldPrice: 20,
            newPrice: 15,
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            isNew: true,
            title: "Blue Shirt",
            oldPrice: 25,
            newPrice: 17,
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1563389234808-52344934935c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            isNew: true,
            title: "Colorfull Shirt",
            oldPrice: 24,
            newPrice: 20,
        },
    ];

	return <div className={classes.container}>
        {data.map((item)=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>;
};

export default List;
