import Footer from "./Footer";
import FromTheBlog from "./FromTheBlog";
import LatestProduct from "./LatestProduct";
import Featured from "./Featured";
import {Link, Outlet, useLocation} from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Layout = () => {
    let location = useLocation();
    const [clicked, setClicked] = useState(false);
    const [deptStyle, setDeptStyle] = useState({});
    const categories = useSelector(state => state.create.categories);
    const products = useSelector(state => state.create.products);

    const [isOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filteredData = products.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            // setIsOpen(false)
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputText)
        }
    })
    // console.log(filteredData)

    useEffect(()=>{
        if (inputText === '')
        {
            setIsOpen(false)
        }
        else
        {
            setIsOpen(true)
        }

    },[inputText])


    // console.log(handleSearch)
    useEffect(() => {
        if (location.pathname === '/') {
            setClicked(true);
            setDeptStyle({
                position: 'absolute',
                left: '14px',
                top: '46px',
                width: '90%',
                zIndex: '9',
                background: '#ffffff'
            });
        }
        else
        {
            setClicked(false);

        }
    }, [location.pathname === '/']);

    function handleClick() {
        setClicked(prevState => !prevState);
        if (clicked ===true) {
            setDeptStyle({
                position: 'absolute',
                left: '14px',
                top: '46px',
                width: '90%',
                zIndex: '9',
                background: '#ffffff'
            });
        }


    }
    return (
        <>
            <HeaderLayout/>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories" onClick={handleClick}>
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars"></i>
                                    <span>All departments</span>
                                </div>
                                {clicked === true &&
                                    <ul style={deptStyle}>
                                        {categories.length>0 && categories.map( (category, index) =>(
                                        <li key={index}>
                                            {/*<a href="#">{category.text}</a>*/}
                                            <Link to= {`category/${category.id}`} >{category.text}</Link>
                                        </li>
                                         ))}
                                    </ul>
                                }
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#" >
                                        <input
                                            onChange={inputHandler}
                                            type="text" placeholder="What do yo u need?"
                                        />
                                        {/*<button type="submit" className="site-btn">SEARCH</button>*/}

                                    </form>
                                </div>
                                <div>
                                    {isOpen && filteredData.length > 0 && (
                                        <ul style={{ position: "absolute", zIndex: 1,marginTop:'57px',marginLeft:'3px',backgroundColor:'#f9f9f9',minWidth:'608px',boxShadow:' 0px 8px 16px 0px rgba(0,0,0,0.2)',listStyle:'none' }}>
                                            {filteredData.map((suggestion, index) => (
                                                <li key={index}>
                                                    <Link to={`product/${suggestion.id}`}
                                                        style={{color:'black',padding:'12px 16px',textDecoration:'none',display:'block'}}
                                                    >
                                                        {suggestion.name}
                                                    </Link>

                                                </li>
                                            ))}
                                        </ul>
                                    )}
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

                            {location.pathname === '/' &&
                                <div className="hero__item set-bg"
                                     style={{backgroundImage: 'url(' + require('./img/hero/banner.jpg') + ')'}}>
                                    <div className="hero__text">
                                        <span>FRUIT FRESH</span>
                                        <h2>Vegetable <br/>100% Organic</h2>
                                        <p>Free Pickup and Delivery Available</p>
                                        <Link to= {`/shop`} className="primary-btn">SHOP NOW</Link>
                                    </div>
                                </div>
                            }


                        </div>
                    </div>
                </div>
            </section>

            <div id="detail">
                <Outlet/>
            </div>
            <Footer/>


        </>

    )
}
export default Layout;