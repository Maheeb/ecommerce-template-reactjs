import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addItemsToCart, updateSingleProduct} from "./store/globalArray";
import {Link} from "react-router-dom";

const Featured = () => {
    const products = useSelector(state => state.create.products);
    const carts = useSelector(state => state.create.cart);
    const productTaken = useSelector(state => state.create.productTaken);
    const [defaultValue, setDefaultValue] = useState(1);

    console.log(productTaken)
    const dispatch = useDispatch();

    const [item, setItem] = useState("");
    const linkStyle = {
        pointerEvents: "none",
        cursor: "default",
        color: "gray",
        display: "none"
    };
    useEffect(() => {
    }, [carts]);

    const handleClick = (e, v) => {
        e.preventDefault();
        addToCart(v);
    };

    const addToCart = (v) => {
        // console.log(v)
        let isExist = productTaken.find(item => item.id == v)
        if (isExist != undefined)
        {

            dispatch(updateSingleProduct({product_id:v,addedQuantity:isExist.count+1}))
        }
       else {

            dispatch(addItemsToCart(v));
        }
    }
    return (
        <>
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".oranges">Oranges</li>
                                    <li data-filter=".fresh-meat">Fresh Meat</li>
                                    <li data-filter=".vegetables">Vegetables</li>
                                    <li data-filter=".fastfood">Fastfood</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">

                        {products.length > 0 && products.map((product, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={index}>
                                <div className="featured__item">
                                    {/*<div className="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">*/}
                                    <div className="featured__item__pic set-bg"
                                         style={{backgroundImage: 'url(' + require(`./img/product/${product.image}`) + ')'}}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li>
                                                <Link to= {`product/${product.id}`} ><i className="fa fa-retweet"></i></Link>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(event) => handleClick(event, product.id)}>
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">{product.name}</a></h6>
                                        <h5>{product.price}$</h5>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Featured;