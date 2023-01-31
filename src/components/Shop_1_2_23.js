import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addItemsToCart, getFilteredProducts, updateSingleProduct} from "./store/globalArray.js";
// import InputRange from 'react-input-range';
const Shop = () => {
    let { catId } = useParams();
    const categories = useSelector(state => state.create.categories);
    const allProducts = useSelector(state => state.create.products);
    const dispatch = useDispatch();
    const [products,setProducts] = useState(allProducts);
    const productTaken = useSelector(state => state.create.productTaken);
    // const [products,setProducts] = useState([]);
    const handleClick = (e, v) => {
        e.preventDefault();
        addToCart(v);
    };



    const addToCart = (v) => {
        console.log(productTaken.length)
        let isExist = (productTaken.length>0) && productTaken.find(item => item.id == v)
        console.log(isExist)
        if ( isExist) {
            // console.log(isExist)
            console.log('exist')
            dispatch(updateSingleProduct({product_id: v, addedQuantity: isExist.count + 1}))
        }
        else {
            console.log('new')
            dispatch(addItemsToCart(v));
        }
    }
    const [range, setRange] =  useState(50);
    const rangeSelector = (event) => {
        // console.log(event.target.value)
        setRange(event.target.value);
        // console.log()
    };

  return(
      <>

          {/*<section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">*/}
          <section className="breadcrumb-section set-bg" style={{backgroundImage: 'url(' + require('./img/breadcrumb.jpg') + ')'}}>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <div className="breadcrumb__text">
                              <h2>Organi Shop</h2>
                              <div className="breadcrumb__option">
                                  <Link to='/'>Home</Link>
                                  <span>Shop</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section className="product spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-md-5">
                          <div className="sidebar">
                              <div className="sidebar__item">
                                  <h4>Department</h4>
                                  <ul>
                                      {categories.length>0 && categories.map( (category, index) =>(
                                          <li key={index}>
                                              {/*<a href="#">{category.text}</a>*/}
                                              <Link to= {`/category/${category.id}`} >{category.text}</Link>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                              <div className="sidebar__item">
                                  <h4>Price</h4>
                                  <div className="price-range-wrap">
                                      <form>
                                          <div className="form-group">
                                              <label htmlFor="formControlRange"></label>
                                              {/*<input*/}
                                              {/*    value={range}*/}
                                              {/*    onChange={(event) => rangeSelector(event)}*/}
                                              {/*    type="range" className="form-control-range" id="formControlRange"*/}
                                              {/*/>*/}
                                              {/*<InputRange*/}
                                              {/*    minValue={0}*/}
                                              {/*    maxValue={100}*/}
                                              {/*    value={range}*/}
                                              {/*    onChange={handleChange}*/}
                                              {/*/>*/}
                                              <input
                                                  type='range'
                                                  onChange={rangeSelector}
                                                  min={10}
                                                  max={100}
                                                  step={1}
                                                  value={range}
                                                  className='custom-slider'>
                                              </input>
                                              <p>Price: {range}</p>
                                              <p>Min: 10</p>
                                              <p>Max: 100</p>
                                              {/*Your range of Price is between {range[0]} /- and {range[1]} /-*/}

                                          </div>
                                      </form>

                                  </div>
                              </div>


                          </div>
                      </div>
                      <div className="col-lg-9 col-md-7">

                          <div className="filter__item">
                              <div className="row">
                                  <div className="col-lg-4 col-md-5">
                                      <div className="filter__sort">
                                          <span>Sort By</span>
                                          <select>
                                              <option value="0">Default</option>
                                              <option value="0">Default</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                      <div className="filter__found">
                                          <h6><span>{allProducts.length}</span> Products found</h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              {allProducts.length>0 && allProducts.map((product,index) =>(

                              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                  <div className="product__item">
                                      <div className="product__item__pic set-bg"  style={{backgroundImage: 'url(' + require(`./img/product/${product.image}`) + ')'}}>
                                          <ul className="product__item__pic__hover">
                                              <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                              {/*<li><a href="#"><i className="fa fa-retweet"></i></a></li>*/}
                                              <li>
                                                  <Link to={`/product/${product.id}`}><i
                                                      className="fa fa-retweet"></i></Link>
                                              </li>
                                              {/*<li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>*/}
                                                <li> <a href="#" onClick={(event) => handleClick(event, product.id)}>
                                                  <i className="fa fa-shopping-cart"></i>
                                              </a>
                                                </li>
                                          </ul>
                                      </div>
                                      <div className="product__item__text">
                                          <h6><a href="#">{product.name}</a></h6>
                                          <h5>{product.price}$</h5>
                                      </div>
                                  </div>
                              </div>

                              ) )}
                          </div>
                          <div className="product__pagination">
                              {/*<a href="#">1</a>*/}
                              {/*<a href="#">2</a>*/}
                              {/*<a href="#">3</a>*/}
                              {/*<a href="#"><i className="fa fa-long-arrow-right"></i></a>*/}
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      </>
  )
}
export default Shop;