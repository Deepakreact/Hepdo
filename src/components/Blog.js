import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AdvertiseMent from "./AdvertiseMent";
import '../css/blog.css'
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      MyBlogss: [],
      LatestPosts: [],
    };
  }

componentDidMount() {
    const apiUrl = "http://admin.heapdo.com/api/blogs";
    const latestposts = "http://admin.heapdo.com/api/latestposts";
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            MyBlogss: result.data,
          });
        },
        (error) => {
          this.setState({ error });
        }
   );


   fetch(latestposts)
   .then((res1) => res1.json())
   .then(
     (result1) => {
       this.setState({
         LatestPosts: result1.data,
       });
     },
     (error) => {
       this.setState({ error });
     }
);
}
  render() {
    const { error, MyBlogss,LatestPosts } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
    return (
    <>
     <section className="breadcum">
            <div className="banner-breadcum section" style={{
                    backgroundImage: `url(${('https://images.pexels.com/photos/544117/pexels-photo-544117.jpeg?w=940&h=650&auto=compress&cs=tinysrgb')})`
                }} >
               <div className="container text-center breadcum-left">
                  <div className="left-content">
                     <h1>blogs</h1>
                     <div className="cent">
                        <ol className="breadcrumb-title">
                           <li><a href="/">Home</a></li>
                           <li className="active">blogs</li>
                        </ol>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className="content">
         
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 col-md-12">
                     <div className="row blog-grid-row">
                     {MyBlogss.map((itemblog, index) => (
                        <div className="col-md-6 col-sm-12" key={index}>
                           <div className="blog grid-blog">
                              <div className="blog-image">
                              <Link to={`/details/${itemblog.slug}`}><img className="img-fluid" src={itemblog.image} alt="Post" /></Link>
                              </div>
                              <div className="blog-content">
                                 <ul className="entry-meta meta-item">
                                    <li>
                                       <div className="post-author">
                                       <Link to={`/details/${itemblog.slug}`}> <span>Admin</span></Link>
                                       </div>
                                    </li>
                                    <li><i className="far fa-clock"></i>{itemblog.datetime}</li>
                                 </ul>
                                 <h3 className="blog-title">
                                 <Link to={`/details/${itemblog.slug}`}>{itemblog.title}</Link></h3>
                                 <p className="mb-0">{itemblog.description.substring(3,50)}</p>
                              </div>
                           </div>
                        </div>
                      ))}
                     </div>
                     <div className="row">
                        <div className="col-md-12">
                           <div className="blog-pagination">
                              {/* <nav>
                                 <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                       <a className="page-link" href="#" tabindex="-1"><i className="fas fa-angle-double-left"></i></a>
                                    </li>
                                    <li className="page-item">
                                       <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item active">
                                       <a className="page-link" href="#">2 <span className="visually-hidden">(current)</span></a>
                                    </li>
                                    <li className="page-item">
                                       <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                       <a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a>
                                    </li>
                                 </ul>
                              </nav> */}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                     <div className="card search-widget">
                        <div className="card-body">
                           <form className="search-form">
                              <div className="input-group">
                                 <input type="text" placeholder="Search..." className="form-control" />
                                 <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="card post-widget">
                        <div className="card-header">
                           <h4 className="card-title">Latest Posts</h4>
                        </div>
                        <div className="card-body">
                           <ul className="latest-posts">
                           {LatestPosts.map((LatestPostss, indexnow) => (
                              <li kay={indexnow}>
                                 <div className="post-thumb">
                                 <Link to={`/details/${LatestPostss.slug}`}>
                                    <img className="img-fluid" src={LatestPostss.image} alt="" />
                                    </Link>
                                 </div>
                                 <div className="post-info">
                                    <h4>
                                    <Link to={`/details/${LatestPostss.slug}`}>{LatestPostss.title}</Link>
                                    </h4>
                                    <p>{LatestPostss.datetime}</p>
                                 </div>
                              </li>
                            
                            ))}
                            
                             
                           </ul>
                           
                        </div>
                      
                       
                     </div>
                     <div className="blog-ad">
                     <AdvertiseMent/>
                     
                     </div>
             
                   
                   
                           </div>
               </div>
            </div>
         </div>
    </>
    );
    }
  }
}
export default Blog;
