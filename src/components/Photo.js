import React, { Component } from 'react'
import './style.css';
import axios from "axios";
import Spinner from './Spinner';
export default class Photo extends Component {
    constructor(props){
        super(props);
        this.state={
            photos:[],
            loading:true,
            page:1,
        }
    }
    updateImage(){
        let url=`https://picsum.photos/v2/list?page=${this.state.page}&limit=18`;
        axios.get(url)
        .then(res=> 
        this.setState({
            photos:res.data,
        })
        )
        .catch(err=> console.log(err))
    }
   componentDidMount(){
       this.updateImage();
       this.setState({
        loading:false
    })
   }
   scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }; 
   handlePreviousClick = async ()=>{

    this.setState({page: this.state.page-1,loading:true})
    this.updateImage();
    this.setState({
        loading:false
    })
    this.scrollToTop();
  } 
  handleNextClick = async ()=>{

    this.setState({page: this.state.page+1,loading:true})
    this.updateImage();
    this.setState({
        loading:false
    })
    this.scrollToTop();
  }
  render() {
    //   let {photos} =this.state;
    return (
      <>
      

       
  
        <h1 className='text-center'>ImageBook</h1>
       
        <div className='container my-3'>
       
        {this.state.loading && <Spinner/>}
          
            <div className="row">
                
                {this.state.photos.map((photo)=>{
                     return  <div className="col-md-4 my-4 " key={photo.id}>

                                <div className="card " >
                                     
                                     <img src={photo.download_url} className="card-img-top" alt="..." />
                                     <div className="card-body">
                                

                                        <p className="card-text"><small className="text-muted">By {!photo.author?"Unknown":photo.author}  </small></p>
                                        <a rel="noreferrer" href={photo.url} target="_blank" className="btn btn-sm btn-info">
                                        Download
                                        </a>
                                     </div>
                                </div>
                                                
                             </div>
                })}
               
            </div>
          

      </div>

            <div className="container cont">
                <button  disabled={this.state.page<=1}  type="button" class="btn btn-success spcl" onClick={this.handlePreviousClick} >←</button>
                <button    type="button" class="btn btn-success spcl" onClick={this.handleNextClick} >→</button>
            </div>
      </>
    )
  }
}
