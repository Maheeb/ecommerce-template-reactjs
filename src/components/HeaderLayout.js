import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const HeaderLayout = () => {
    const carts = useSelector(state => state.create.cart);
    const cartProducts = useSelector(state => state.create.productTaken);
    const totalAmount = cartProducts.length>0 && cartProducts.reduce((acc, item) => acc + (item.count*item.price), 0);
    const totalItemInCart = cartProducts.length>0 && cartProducts.reduce((acc, item) => acc + item.count, 0);
  return(
      <>
          <div className="humberger__menu__overlay"></div>
          <div className="humberger__menu__wrapper">
              <div className="humberger__menu__logo">
                  <a href="#"><img src="img/logo.png" alt=""/></a>
              </div>
              <div className="humberger__menu__cart">
                  <ul>
                      <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                      <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                  </ul>
                  <div className="header__cart__price">item: <span>$150.00</span></div>
              </div>
              <div className="humberger__menu__widget">
                  <div className="header__top__right__language">
                      <img src="img/language.png" alt=""/>
                      <div>English</div>
                      <span className="arrow_carrot-down"></span>
                      <ul>
                          <li><a href="#">Spanis</a></li>
                          <li><a href="#">English</a></li>
                      </ul>
                  </div>
                  <div className="header__top__right__auth">
                      <a href="#"><i className="fa fa-user"></i> Login</a>
                  </div>
              </div>
              <nav className="humberger__menu__nav mobile-menu">
                  <ul>
                      <li className="active"><a href="./index.html">Home</a></li>
                      <li><a href="./shop-grid.html">Shop</a></li>
                      <li><a href="#">Pages</a>
                          <ul className="header__menu__dropdown">
                              <li>
                                  <a href="./shop-details.html">Shop Details</a>
                              </li>
                              <li><a href="./shoping-cart.html">Shoping Cart</a></li>

                              {/*<li><a href="./checkout.html">Check Out</a></li>*/}
                              <li>

                                  <Link to={`/checkout`}>Check Out</Link>
                              </li>
                              <li><a href="./blog-details.html">Blog Details</a></li>
                          </ul>
                      </li>
                      <li><a href="./blog.html">Blog</a></li>
                      <li><a href="./contact.html">Contact</a></li>
                  </ul>
              </nav>
              <div id="mobile-menu-wrap"></div>
              <div className="header__top__right__social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-pinterest-p"></i></a>
              </div>
              <div className="humberger__menu__contact">
                  <ul>
                      <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                      <li>Free Shipping for all Order of $99</li>
                  </ul>
              </div>
          </div>

          <header className="header">
              <div className="header__top">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 col-md-6">
                              <div className="header__top__left">
                                  <ul>
                                      <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                      <li>Free Shipping for all Order of $99</li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                              <div className="header__top__right">
                                  <div className="header__top__right__social">
                                      <a href="#"><i className="fa fa-facebook"></i></a>
                                      <a href="#"><i className="fa fa-twitter"></i></a>
                                      <a href="#"><i className="fa fa-linkedin"></i></a>
                                      <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                  </div>
                                  <div className="header__top__right__language">
                                      <img src="img/language.png" alt=""/>
                                      <div>English</div>
                                      <span className="arrow_carrot-down"></span>
                                      <ul>
                                          <li><a href="#">Spanis</a></li>
                                          <li><a href="#">English</a></li>
                                      </ul>
                                  </div>
                                  <div className="header__top__right__auth">
                                      <a href="#"><i className="fa fa-user"></i> Login</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="header__logo">

                              <Link to='/'> <img src="img/logo.png" alt=""/></Link>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <nav className="header__menu">
                              <ul>
                                  <li className="active">
                                      <Link to='/'>Home</Link>
                                  </li>
                                  <li>
                                      <Link to='/shop'>Shop</Link>
                                  </li>
                                  <li><a href="#">Pages</a>
                                      <ul className="header__menu__dropdown">
                                          <li>
                                              <Link to='/shopping-cart'>Shopping Cart</Link>
                                          </li>

                                          {/*<li><a href="./checkout.html">Check Out</a></li>*/}
                                          <li>   <Link to={`/checkout`}>Check Out</Link></li>
                                          <li><a href="./blog-details.html">Blog Details</a></li>
                                      </ul>
                                  </li>

                                  {/*<li><a href="./blog.html">Blog</a></li>*/}
                                  <li>   <Link to={`/blog`}>Blog</Link></li>
                                  {/*<li><a href="./contact.html">Contact</a></li>*/}
                                  <li>   <Link to={`/contact`}>Contact</Link></li>
                              </ul>
                          </nav>
                      </div>
                      <div className="col-lg-3">
                          <div className="header__cart">
                              <ul>
                                  <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>{totalItemInCart}</span></a></li>
                              </ul>
                              <div className="header__cart__price">item: <span>${totalAmount}</span></div>
                          </div>
                      </div>
                  </div>
                  <div className="humberger__open">
                      <i className="fa fa-bars"></i>
                  </div>
              </div>
          </header>
      </>
  )
}
export default HeaderLayout