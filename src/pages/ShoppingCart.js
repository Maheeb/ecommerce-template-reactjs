import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateSingleProduct} from "../components/store/globalArray";

const ShoppingCart = () => {
    const cartProducts = useSelector(state => state.create.productTaken);
    const [products,setProduct] = useState([]);
    const [localValues, setLocalValues] = useState(cartProducts);
    const dispatch = useDispatch();


    useEffect(()=>{

        setLocalValues(cartProducts);

    },[cartProducts])
    const handleChange = (e, index,product_id) => {
        const newLocalValues = [...localValues];

        newLocalValues[index] = parseInt(e.target.value);
        // console.log(newLocalValues)
        setLocalValues(newLocalValues);
        // dispatch(updateSingleProduct({product_id:product_id,addedQuantity:parseInt(e.target.value)}))
        dispatch(updateSingleProduct({product_id:product_id,addedQuantity:parseInt(e.target.value==""?0:parseInt(e.target.value))}))
    }



    const handleIncrement = (e, index,product_id) => {
    let inc=1
        const newLocalValues = [...localValues];
        if (newLocalValues[index] != undefined)
        {
             inc = newLocalValues[index].count +1
            newLocalValues[index] =inc;
        }

        setLocalValues(newLocalValues);
        dispatch(updateSingleProduct({product_id:product_id,addedQuantity:parseInt(inc)}))
    }
    const handleDecrement = (e, index,product_id) => {
        let dec=1
        const newLocalValues = [...localValues];
        if (newLocalValues[index] != undefined)
        {
            dec = newLocalValues[index].count -1
            newLocalValues[index] =dec;
        }

        setLocalValues(newLocalValues);
        dispatch(updateSingleProduct({product_id:product_id,addedQuantity:parseInt(dec)}))
    }

  return(
        <>
            <section className="breadcrumb-section set-bg" style={{backgroundImage: 'url(' + require('./../components/img/breadcrumb.jpg') + ')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Shopping Cart</h2>
                                <div className="breadcrumb__option">
                                    <Link to='/'>Home</Link>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th className="shoping__product">Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {cartProducts && cartProducts.map( (item,index) => (
                                    <tr key={index}>
                                        <td className="shoping__cart__item">
                                            <img src={`/img/product/${item.image}`} alt=""/>
                                                <h5>{item.name}</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            ${item.price}
                                        </td>
                                        <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                      <span className="dec qtybtn" onClick={(event) => {
                                                          handleDecrement(event, index,item.id);
                                                      }}>-</span>

                                                    <input value={localValues[index].count} onChange={(event) => handleChange(event, index,item.id)}/>

                                                    <span className="inc qtybtn" onClick={(event) => {
                                                        handleIncrement(event, index,item.id);
                                                    }}>+</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="shoping__cart__total">
                                            ${item.price*item.count}
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span className="icon_close"></span>
                                        </td>
                                    </tr>

                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>$454.98</span></li>
                                    <li>Total <span>$454.98</span></li>
                                </ul>
                                <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ShoppingCart;