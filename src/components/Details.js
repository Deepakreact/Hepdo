import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Details extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          MyDetail: [],
          LatestPosts: [],
          slug:this.props.Slug
        };
      }
    
    componentDidMount() {
       if(this.state.slug){
         const apiUrl = "http://admin.heapdo.com/api/blogdetail/"+(this.state.slug);
     
         fetch(apiUrl)
           .then((res) => res.json())
           .then(
             (result) => {
               this.setState({
                 MyDetail: result.data[0],
               });
             },
             (error) => {
               this.setState({ error });
             }
        );

       }
       

       const latestposts = "http://localhost/happydo/api/latestposts";
   
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

    render(){
        const { error, MyDetail,LatestPosts } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else {
        return (
        <>
        <section className="breadcum">
            <div className="banner-breadcum section "  style={{
                    backgroundImage: `url(${('https://images.pexels.com/photos/544117/pexels-photo-544117.jpeg?w=940&h=650&auto=compress&cs=tinysrgb')})`
                }}>
               <div className="container text-center breadcum-left">
                  <div className="left-content">
                     <h1>blog-details</h1>
                     <div className="cent">
                        <ol className="breadcrumb-title">
                           <li><a href="#">Home</a></li>
                           <li className="active">blog-details</li>
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
                     <div className="blog-view">
                        <div className="blog blog-single-post">
                           <div className="blog-image">
                              <a href="javascript:void(0);"><img alt="" src={MyDetail.image} className="img-fluid" /></a>
                           </div>
                           <h3 className="blog-title">{MyDetail.title}</h3>
                           <div className="blog-info clearfix">
                              <div className="post-left">
                                 <ul>
                                    <li>
                                       <div className="post-author">
                                          <a href="#"><span>Admin</span></a>
                                       </div>
                                    </li>
                                    <li><i className="far fa-calendar"></i>{MyDetail.datetime}</li>
                                    {/* <li><i className="far fa-comments"></i>12 Comments</li> */}
                                    {/* <li><i className="fa fa-tags"></i>Health Tips</li> */}
                                 </ul>
                              </div>
                           </div>
                           <div className="blog-content">
                              {MyDetail.title}
                           </div>
                           {MyDetail.description}
                        </div>
                        <div className="card blog-share clearfix">
                           <div className="card-header">
                              <h4 className="card-title">Share the post</h4>
                           </div>
                           <div className="card-body">
                              <ul className="social-share">
                                 <li><a href="#" title="Facebook"><i className="fab fa-facebook"></i></a></li>
                                 <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#" title="Google Plus"><i className="fab fa-google-plus"></i></a></li>
                                 <li><a href="#" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        {/* <div className="card blog-comments clearfix">
                           <div className="card-header">
                              <h4 className="card-title">Comments (12)</h4>
                           </div>
                           <div className="card-body pb-0">
                              <ul className="comments-list">
                                 <li>
                                    <div className="comment">
                                       <div className="comment-author">
                                          <img className="avatar" alt="" src="assets/img/patients/patient4.jpg" />
                                       </div>
                                       <div className="comment-block">
                                          <span className="comment-by">
                                          <span className="blog-author-name">Michelle Fairfax</span>
                                          </span>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                          <p className="blog-date">Dec 6, 2017</p>
                                          <a className="comment-btn" href="#">
                                          <i className="fas fa-reply"></i> Reply
                                          </a>
                                       </div>
                                    </div>
                                    <ul className="comments-list reply">
                                       <li>
                                          <div className="comment">
                                             <div className="comment-author">
                                                <img className="avatar" alt="" src="assets/img/patients/patient5.jpg" />
                                             </div>
                                             <div className="comment-block">
                                                <span className="comment-by">
                                                <span className="blog-author-name">Gina Moore</span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                <p className="blog-date">Dec 6, 2017</p>
                                                <a className="comment-btn" href="#">
                                                <i className="fas fa-reply"></i> Reply
                                                </a>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="comment">
                                             <div className="comment-author">
                                                <img className="avatar" alt="" src="assets/img/patients/patient3.jpg" />
                                             </div>
                                             <div className="comment-block">
                                                <span className="comment-by">
                                                <span className="blog-author-name">Carl Kelly</span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                <p className="blog-date">December 7, 2017</p>
                                                <a className="comment-btn" href="#">
                                                <i className="fas fa-reply"></i> Reply
                                                </a>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <div className="comment">
                                       <div className="comment-author">
                                          <img className="avatar" alt="" src="assets/img/patients/patient6.jpg" />
                                       </div>
                                       <div className="comment-block">
                                          <span className="comment-by">
                                          <span className="blog-author-name">Elsie Gilley</span>
                                          </span>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                          <p className="blog-date">December 11, 2017</p>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="comment">
                                       <div className="comment-author">
                                          <img className="avatar" alt="" src="assets/img/patients/patient7.jpg" />
                                       </div>
                                       <div className="comment-block">
                                          <span className="comment-by">
                                          <span className="blog-author-name">Joan Gardner</span>
                                          </span>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                          <p className="blog-date">December 13, 2017</p>
                                          <a className="comment-btn" href="#">
                                          <i className="fas fa-reply"></i> Reply
                                          </a>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div> */}
                        {/* <div className="card new-comment clearfix">
                           <div className="card-header">
                              <h4 className="card-title">Leave Comment</h4>
                           </div>
                           <div className="card-body">
                              <form>
                                 <div className="form-group">
                                    <label>Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" />
                                 </div>
                                 <div className="form-group">
                                    <label>Your Email Address <span className="text-danger">*</span></label>
                                    <input type="email" className="form-control" />
                                 </div>
                                 <div className="form-group">
                                    <label>Comments</label>
                                    <textarea rows="4" className="form-control"></textarea>
                                 </div>
                                 <div className="submit-section">
                                    <button className="btn btn-primary submit-btn" type="submit">Submit</button>
                                 </div>
                              </form>
                           </div>
                        </div> */}
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
                    
                  </div> 
               </div>
            </div>
         </div>
        </>
    );
                           }
}
}
export default Details;