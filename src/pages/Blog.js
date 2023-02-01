import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import BlogSideBar from "../components/BlogSideBar";

const Blog = () => {
    const blogs = useSelector(state => state.create.blogs);
  return(
      <>
          <section className="breadcrumb-section set-bg" style={{backgroundImage: 'url(' + require('./../components/img/breadcrumb.jpg') + ')'}}>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <div className="breadcrumb__text">
                              <h2>Organi Shop</h2>
                              <div className="breadcrumb__option">
                                  <Link to='/'>Home</Link>
                                  <span>Blog</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="blog spad">
              <div className="container">
                  <div className="row">
                      <BlogSideBar></BlogSideBar>
                      <div className="col-lg-8 col-md-7">
                          <div className="row">
                              { blogs.length>0 && blogs.map( (item, index) =>(
                              <div className="col-lg-6 col-md-6 col-sm-6">

                                  <div className="blog__item">
                                      <div className="blog__item__pic">
                                          <img src="img/blog/blog-2.jpg" alt=""/>
                                      </div>
                                      <div className="blog__item__text">
                                          <ul>
                                              <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                              <li><i className="fa fa-comment-o"></i> 5</li>
                                          </ul>
                                          <h5>
                                              <Link to={`/blog/${item.id}`}>{item.title}</Link>
                                              {/*<a href="#">{item.title}</a>*/}
                                          </h5>
                                          <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                              quaerat </p>
                                          {/*<a href="#" className="blog__btn">READ MORE <span*/}
                                          {/*    className="arrow_right"></span></a>*/}
                                          <Link to={`/blog/${item.id}`} className="blog__btn">READ MORE <span
                                              className="arrow_right"></span></Link>
                                      </div>
                                  </div>

                              </div>
                              ))}
                              <div className="col-lg-12">

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}
export default Blog;