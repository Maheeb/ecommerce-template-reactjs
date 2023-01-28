import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addItemsToCart, updateSingleProduct} from "../components/store/globalArray";

const ProductDetail = () => {
    let { productId } = useParams();
    const allProducts = useSelector(state => state.create.products);
    const cartProducts = useSelector(state => state.create.productTaken);
    const [product,setProduct] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let isProductInCart = cartProducts.find(function (item) {
            return item.id == productId
        })
        if (isProductInCart !=undefined) {
            if (isProductInCart.id == productId)
            {
                setProduct(isProductInCart)
                // setDefaultValue(product.count)
            }
        }
        else
        {
            let selectedObject = allProducts.find(function (item) {

                return item.id == productId;
            });
            setProduct(selectedObject)
            // setDefaultValue(1)
        }

    }, [productId]);


    const [defaultValue, setDefaultValue] = useState('');
    useEffect(()=>{
        setDefaultValue(product.count == undefined ? 1 : product.count);
    },[product.count])


    const handleSingleItemClick = (e, v) => {
        e.preventDefault();
        let isProductInCart = cartProducts.find(function (item) {
            return item.id == v
        })
        let test ={};
        if (v!="") {

            dispatch(updateSingleProduct({product_id:v,addedQuantity:defaultValue}))
        }

    };
return(
    <>
        <section className="breadcrumb-section set-bg" style={{backgroundImage: 'url(' + require('./../components/img/breadcrumb.jpg') + ')'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>{product.name}</h2>
                            <div className="breadcrumb__option">
                                <Link to='/'>Home</Link>
                                {/*<a href="./index.html">Vegetables</a>*/}
                                <span>Product Detail</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                {/*<img className="product__details__pic__item--large" src="img/product/details/product-details-1.jpg" alt=""/>*/}
                                <img className="product__details__pic__item--large" src={`/img/product/${product.image}`} alt=""/>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3>{product.name}</h3>
                            <div className="product__details__rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <span>(18 reviews)</span>
                            </div>
                            <div className="product__details__price">${product.price}</div>
                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet
                                quam
                                vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit
                                amet
                                quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <span className="dec qtybtn"  onClick={() => {
                                            setDefaultValue(Math.max(defaultValue - 1, 0));
                                        }}>-</span>
                                        {/*<input type="text" value={value} onChange={e => setValue(Number(e.target.value))}/>*/}
                                        <input type="text" value={defaultValue} onChange={e => setDefaultValue(Number(e.target.value))}/>
                                        <span className="inc qtybtn"  onClick={() => {
                                            setDefaultValue(defaultValue + 1);
                                        }}>+</span>
                                    </div>
                                </div>
                            </div>
                            {/*<a href="#" className="primary-btn">ADD TO CART</a>*/}
                            <a href="#" className="primary-btn" onClick={(event) => handleSingleItemClick(event, product.id)}>ADD TO CART</a>
                            <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                            <ul>
                                <li><b>Availability</b> <span>In Stock</span></li>
                                <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                <li><b>Weight</b> <span>0.5 kg</span></li>
                                <li><b>Share on</b>
                                    <div className="share">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
)
}
export default ProductDetail;