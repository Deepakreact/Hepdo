import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/detail.css'
import AdvertiseMent from './AdvertiseMent'

function Details2({Slug}) {
    const [details, setDetails] = useState({})
    const [latestposts, setLatestpost] = useState([])
    console.log(Slug)
    useEffect(() => {
        if(Slug){
            const apiUrl = "http://admin.heapdo.com/api/blogdetail/"+(Slug);
        
            fetch(apiUrl)
              .then((res) => res.json())
              .then(
                (result) => {
                  setDetails(
                      result.data[0]
                    
                  );
                },
                (error) => {
                    console.log(error.message)
                  
                }
           );
   
          }
      
    
      return () => {
        //
      }
    }, [Slug])




    useEffect(() => {
        const api = "http://admin.heapdo.com/api/latestposts";

        fetch(api)
        .then((res) => res.json())
        .then(
          (result) => {
            setLatestpost(
                result.data
              
            );
          },
          (error) => {
              console.log(error.message)
            
          }
     );
      
    
      return () => {
        //
      }
    }, [])
    
    console.log(details)
    




  return (
    <div>
   
    <div className='detail'>
    <div className='detail-ad'>
    <AdvertiseMent/>
    
    </div>


    <div className='d-left'>
    <img src={details.image} alt='/' className='d-img'></img>
    <h1>{Slug}</h1>
    <h1>{details.title}</h1>
    <h1>{details.name}</h1>
    <p>{details.description}</p>
  
    
    </div>
    <div className='d-right'>
    
    <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar d-right-sidebar">

    


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
          {latestposts.map((LatestPostss, indexnow) => (
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
  )
}

export default Details2