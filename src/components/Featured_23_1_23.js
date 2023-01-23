import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addItemsToCart} from "./store/globalArray";

const Featured = () => {
    const products = useSelector(state => state.create.products);
    const carts = useSelector(state => state.create.cart);
    const productTaken = useSelector(state => state.create.productTaken);

    console.log(productTaken)
    let newArray =[];
    let counts = []
    for(let i =0; i < carts.length; i++){
        // console.log(carts[i].id)
        if (counts[carts[i].id]){
            counts[carts[i].id] += 1
        } else {
            counts[carts[i].id] = 1
        }
    }
    // console.log(counts)
    for (let key in counts){
        if (counts[key] >= 1){
            // console.log(key + " counted: " + counts[key] + " times.")
            newArray.push({ id : parseInt(key), counted: counts[key]})
        }
    }
    // console.log(newArray)

   let result = [];

    newArray.forEach((value,key)=>{
        result[value.id]= value.counted;
    })

    // carts.map((value, index) => {
    //         console.log(value.id +"=="+ result[value.id])
    // })


    let test = []
   carts.forEach(obj1 => {
        let obj2 = newArray.find(obj  => obj.id === obj1.id);
        if (obj2) {
            // console.log(obj2)
            //  obj2.counted = obj1.counted;
            //  carts.push(obj2.counted)

        }


    });
    // console.log(carts)
    // console.log(carts[0].push({counted:0}));


    // console.log(matched);
    // console.log(newArray);

    const dispatch = useDispatch();
    // const [item, setItem] = useState([]);
    const [item, setItem] = useState("");
    const linkStyle = {
        pointerEvents: "none",
        cursor: "default",
        color: "gray",
        display: "none"
    };
    useEffect(() => {
        // console.log(carts)
    }, [carts]);

    const handleClick = (e, v) => {
        e.preventDefault();
        addToCart(v);
    };
    // useEffect(() => {
    //     if (item.length>0) {
    //         addToCart(item);
    //     }
    // }, [item]);

    // useEffect(() => {
    //     // if (item !="") {
    //         addToCart(item);
    //     // }
    // }, [item]);

    const addToCart = (v) => {
        // console.log(v)
        dispatch(addItemsToCart(v));
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
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
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