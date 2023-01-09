import Footer from "./Footer";
import FromTheBlog from "./FromTheBlog";
import LatestProduct from "./LatestProduct";
import Featured from "./Featured";

const Layout = () => {
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
                              <li><a href="./shop-details.html">Shop Details</a></li>
                              <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                              <li><a href="./checkout.html">Check Out</a></li>
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
                              <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <nav className="header__menu">
                              <ul>
                                  <li className="active"><a href="./index.html">Home</a></li>
                                  <li><a href="./shop-grid.html">Shop</a></li>
                                  <li><a href="#">Pages</a>
                                      <ul className="header__menu__dropdown">
                                          <li><a href="./shop-details.html">Shop Details</a></li>
                                          <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                          <li><a href="./checkout.html">Check Out</a></li>
                                          <li><a href="./blog-details.html">Blog Details</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="./blog.html">Blog</a></li>
                                  <li><a href="./contact.html">Contact</a></li>
                              </ul>
                          </nav>
                      </div>
                      <div className="col-lg-3">
                          <div className="header__cart">
                              <ul>
                                  <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                              </ul>
                              <div className="header__cart__price">item: <span>$150.00</span></div>
                          </div>
                      </div>
                  </div>
                  <div className="humberger__open">
                      <i className="fa fa-bars"></i>
                  </div>
              </div>
          </header>

          <section className="hero">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="hero__categories">
                              <div className="hero__categories__all">
                                  <i className="fa fa-bars"></i>
                                  <span>All departments</span>
                              </div>
                              <ul>
                                  <li><a href="#">Fresh Meat</a></li>
                                  <li><a href="#">Vegetables</a></li>
                                  <li><a href="#">Fruit & Nut Gifts</a></li>
                                  <li><a href="#">Fresh Berries</a></li>
                                  <li><a href="#">Ocean Foods</a></li>
                                  <li><a href="#">Butter & Eggs</a></li>
                                  <li><a href="#">Fastfood</a></li>
                                  <li><a href="#">Fresh Onion</a></li>
                                  <li><a href="#">Papayaya & Crisps</a></li>
                                  <li><a href="#">Oatmeal</a></li>
                                  <li><a href="#">Fresh Bananas</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-9">
                          <div className="hero__search">
                              <div className="hero__search__form">
                                  <form action="#">
                                      <div className="hero__search__categories">
                                          All Categories
                                          <span className="arrow_carrot-down"></span>
                                      </div>
                                      <input type="text" placeholder="What do yo u need?"/>
                                          <button type="submit" className="site-btn">SEARCH</button>

                                  </form>
                              </div>
                              <div className="hero__search__phone">
                                  <div className="hero__search__phone__icon">
                                      <i className="fa fa-phone"></i>
                                  </div>
                                  <div className="hero__search__phone__text">
                                      <h5>+65 11.188.888</h5>
                                      <span>support 24/7 time</span>
                                  </div>
                              </div>
                          </div>
                         
                          <div className="hero__item set-bg" style={{backgroundImage: 'url(' + require('./img/hero/banner.jpg') + ')'}}>
                              <div className="hero__text">
                                  <span>FRUIT FRESH</span>
                                  <h2>Vegetable <br/>100% Organic</h2>
                                  <p>Free Pickup and Delivery Available</p>
                                  <a href="#" className="primary-btn">SHOP NOW</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="categories">
              <div className="container">
                  <div className="row">
                      <div className="categories__slider owl-carousel">
                          <div className="col-lg-3">
                              <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                                  <h5><a href="#">Fresh Fruit</a></h5>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                                  <h5><a href="#">Dried Fruit</a></h5>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                                  <h5><a href="#">Vegetables</a></h5>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                                  <h5><a href="#">drink fruits</a></h5>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                                  <h5><a href="#">drink fruits</a></h5>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

            <Featured/>

          <div className="banner">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="banner__pic">
                              {/*<img src="img/banner/banner-1.jpg" alt=""/>*/}
                              <img src="/img/banner/banner-1.jpg" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="banner__pic">
                              <img src="img/banner/banner-2.jpg" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>



            <LatestProduct/>

            <FromTheBlog/>
            <Footer/>

      </>

  )
}
export default Layout;