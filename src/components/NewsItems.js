
// import React, { Component } from 'react'
import React from 'react'

let { title, description, imageUrl, newsUrl, author, date, source } = props;

// export class NewsItems extends Component {
const NewsItems = (props) => {

    // render() {
    // replace this.props with props

    
    // this.props;
    return (
        <div className='card-element my-3'>

            <div className="card overflow-hidden" style={{ height: '450px' }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'

                }}>
                    <span className="position-absolute badge rounded-pill bg-danger">{source}
                    </span>
                </div>

                <img src={imageUrl ? imageUrl : "https://www.reuters.com/resizer/Putyp5s7CLI-SP5SbgTdIlVQsr4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JKLBSYGQM5OUNGRLMMJMG5AGJM.jpg"} className="card-img-top" alt="..." style={{ height: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>By {author ? author : 'unknown'} on {new Date(date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div >
    )
    // } 
}

export default NewsItems
