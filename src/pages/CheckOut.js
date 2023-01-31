import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Swal from "sweetalert2";
import {clearCart} from "../components/store/globalArray";

const CheckOut = () => {
    const cartProducts = useSelector(state => state.create.productTaken);
    const total = cartProducts.length>0 && cartProducts.reduce((acc, item) => acc + (item.count*item.price), 0);
    // console.log(cartProducts)
    const [fn, setInput1] = useState("");
    const [ln, setInput2] = useState("");
    const [country, setCountry] = useState("");
    const [address,setAddress] = useState("");
    const [town, setTown] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({
        fn: "",
        ln: "",
        address: "",
        town: "",
        zip: "",
        phone: "",
        email: "",
    });
    const handleChange = event => {
        if (event.target.name === "fn") {
            setInput1(event.target.value);
        }
        if (event.target.name === "ln") {
            setInput2(event.target.value);
        }
        if (event.target.name === "country") {
            setCountry(event.target.value);
        }
        if (event.target.name === "address") {
            setAddress(event.target.value);
        }
        if (event.target.name === "town") {
            setTown(event.target.value);
        }

        if (event.target.name === "state") {
            setState(event.target.value);
        }
        if (event.target.name === "zip") {
            setZip(event.target.value);
        }
        if (event.target.name === "phone") {
            setPhone(event.target.value);
        }
        if (event.target.name === "email") {
            setEmail(event.target.value);
        }

    };

    const validate = () => {
        let errors = {};
        let formIsValid = true;

        if (!fn) {
            formIsValid = false;
            errors["fn"] = "Cannot be empty";
        }
        if (!ln) {
            formIsValid = false;
            errors["ln"] = "Cannot be empty";
        }
        if (!address) {
            formIsValid = false;
            errors["address"] = "Cannot be empty";
        }
        if (!town) {
            formIsValid = false;
            errors["town"] = "Cannot be empty";
        }

        if (!zip) {
            formIsValid = false;
            errors["zip"] = "Cannot be empty";
        }
        if (!phone) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }
        if (!email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
        setErrors(errors);
        return formIsValid;
    };

    // console.log(errors)
    const handleSubmit = event => {
        event.preventDefault();

        if (validate()) {
            Swal.fire({
                position: '',
                icon: 'success',
                title: 'Congrats! Your order has been placed',
                showConfirmButton: false,
                timer: 1500
            });

            // dispatch(clearCart({type:'yes'}));
            // save the data
        }
    };

    return (
        <>
            <section className="breadcrumb-section set-bg"
                     style={{backgroundImage: 'url(' + require('./../components/img/breadcrumb.jpg') + ')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Checkout</h2>
                                <div className="breadcrumb__option">
                                    <Link to='/'>Home</Link>
                                    <span>Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="checkout spad">
                <div className="container">
                    <div className="checkout__form">
                        <h4>Billing Details</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Fist Name<span>*</span></p>
                                                <input type="text" name='fn' value={fn} onChange={handleChange} />
                                                {errors.fn && <p style={{color:'red'}}>{errors.fn}</p>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input type="text" name='ln' value={ln} onChange={handleChange} />
                                                {errors.ln && <p style={{color:'red'}}>{errors.ln}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country</p>
                                        <input type="text" name='country' value={country} onChange={handleChange} />

                                    </div>
                                    <div className="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input type="text" placeholder="Street Address"
                                               value={address}
                                               name='address'
                                               className="checkout__input__add" onChange={handleChange}/>
                                        {errors.address && <p style={{color:'red'}}>{errors.address}</p>}
                                        <input type="text" name='address' value={address} placeholder="Apartment, suite, unite ect (optinal)" onChange={handleChange}/>
                                        {errors.address && <p style={{color:'red'}}>{errors.address}</p>}
                                    </div>
                                    <div className="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input type="text" name='town' value={town} onChange={handleChange} />
                                        {errors.town && <p style={{color:'red'}}>{errors.town}</p>}
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country/State<span>*</span></p>
                                        <input type="text" name='state' value={state} onChange={handleChange} />
                                        {errors.state && <p style={{color:'red'}}>{errors.state}</p>}
                                    </div>
                                    <div className="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input type="text" name='zip' value={zip} onChange={handleChange} />
                                        {errors.zip && <p style={{color:'red'}}>{errors.zip}</p>}
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input type="text" name='phone' value={phone} onChange={handleChange} />
                                                {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text"  name='email' value={email} onChange={handleChange} />
                                                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        <div className="checkout__order__products">Products <span>Total</span></div>
                                        <ul>
                                            {cartProducts.length>0 && cartProducts.map((item, index) => (
                                                <li key={index}>{item.name} <span>${item.count * item.price} </span></li>
                                            ))}
                                        </ul>
                                        <div className="checkout__order__subtotal">Subtotal <span>${total}</span></div>
                                        <div className="checkout__order__total">Total <span>${total}</span></div>
                                        {/*<div className="checkout__input__checkbox">*/}
                                        {/*    <label htmlFor="acc-or">*/}
                                        {/*        Create an account?*/}
                                        {/*        <input type="checkbox" id="acc-or"/>*/}
                                        {/*        <span className="checkmark"></span>*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        {/*<p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor*/}
                                        {/*    incididunt*/}
                                        {/*    ut labore et dolore magna aliqua.</p>*/}
                                        {/*<div className="checkout__input__checkbox">*/}
                                        {/*    <label htmlFor="payment">*/}
                                        {/*        Check Payment*/}
                                        {/*        <input type="checkbox" id="payment"/>*/}
                                        {/*        <span className="checkmark"></span>*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        {/*<div className="checkout__input__checkbox">*/}
                                        {/*    <label htmlFor="paypal">*/}
                                        {/*        Paypal*/}
                                        {/*        <input type="checkbox" id="paypal"/>*/}
                                        {/*        <span className="checkmark"></span>*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        <button type="submit" className="site-btn">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CheckOut;