import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import BlogSideBar from "../components/BlogSideBar";

const BlogDetail = () => {
    const blogs = useSelector(state => state.create.blogs);
  return(
      <>
          <section className="breadcrumb-section set-bg" style={{backgroundImage: 'url(' + require('./../components/img/blog/details/details-hero.jpg') + ')'}}>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="blog__details__hero__text">
                              <h2>The Moment You Need To Remove Garlic From The Menu</h2>
                              <ul>
                                  <li>By Michael Scofield</li>
                                  <li>January 14, 2019</li>
                                  <li>8 Comments</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="blog-details spad">
              <div className="container">
                  <div className="row">
                    <BlogSideBar></BlogSideBar>
                      <div className="col-lg-8 col-md-7 order-md-1 order-1">
                          <div className="blog__details__text">
                              {/*<img src="img/blog/details/details-pic.jpg" alt=""/>*/}
                              <img src={`/img/blog/details/details-pic.jpg`} alt=""/>
                                  <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed
                                      sit amet
                                      dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris
                                      blandit
                                      aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget
                                      consectetur
                                      sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie
                                      malesuada.
                                      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget
                                      tortor risus.
                                      Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus
                                      convallis
                                      quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
                                      malesuada
                                      feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                  <h3>The corner window forms a place within a place that is a resting point within the
                                      large
                                      space.</h3>
                                  <p>The study area is located at the back with a view of the vast nature. Together with
                                      the other
                                      buildings, a congruent story has been managed in which the whole has a reinforcing
                                      effect on
                                      the components. The use of materials seeks connection to the main house, the
                                      adjacent
                                      stables</p>
                          </div>

                      </div>
                  </div>
              </div>
          </section>

      </>
  )
}
export default BlogDetail;