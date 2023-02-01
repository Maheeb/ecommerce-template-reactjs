const BlogSideBar = () => {
  return(
      <>
          <div className="col-lg-4 col-md-5">
              <div className="blog__sidebar">
                  <div className="blog__sidebar__search">
                      <form action="#">
                          <input type="text" placeholder="Search..."/>
                          <button type="submit"><span className="icon_search"></span></button>
                      </form>
                  </div>
                  <div className="blog__sidebar__item">
                      <h4>Categories</h4>
                      <ul>
                          <li><a href="#">All</a></li>
                          <li><a href="#">Beauty (20)</a></li>
                          <li><a href="#">Food (5)</a></li>
                          <li><a href="#">Life Style (9)</a></li>
                          <li><a href="#">Travel (10)</a></li>
                      </ul>
                  </div>
                  <div className="blog__sidebar__item">

                  </div>
                  <div className="blog__sidebar__item">

                  </div>
              </div>
          </div>
      </>
  )
}
export default BlogSideBar